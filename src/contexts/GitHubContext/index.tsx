/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { BLOG_REPO_NAME, USER_NAME } from '../../constants'
import { Issue, UserData } from '../../models'

interface GithubContextData {
  user: UserData | undefined
  issues: Issue[]
  totalIssues: number
  getIssues: (query?: string) => void
  getIssue: (number: number) => void
}

interface GithubContextProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextData)

export const GithubContextProvider = ({ children }: GithubContextProps) => {
  const [user, setUser] = useState<UserData>()
  const [issues, setIssues] = useState<any>([])
  const [totalIssues, setTotalIssues] = useState(0)

  useEffect(() => {
    loadUser()
    getIssues()
  }, [])

  const loadUser = async () => {
    await api
      .get(`/users/${USER_NAME}`)
      .then(
        ({
          data: { avatar_url, bio, company, followers, html_url, login, name },
        }) =>
          setUser({
            avatarUrl: avatar_url,
            bio,
            company,
            followers,
            htmlUrl: html_url,
            login,
            name,
          }),
      )
  }

  const getIssues = async (query = '') => {
    await api
      .get('search/issues', {
        params: {
          q: `${query} repo:${USER_NAME}/${BLOG_REPO_NAME}`,
        },
      })
      .then(({ data: { items, total_count } }) => {
        setTotalIssues(total_count)
        const formattedIssues = (items as []).map((rawIssue: any) => {
          const diffTimeMs = Math.abs(
            new Date().getTime() - new Date(rawIssue.created_at).getTime(),
          )
          const createdAgo = Math.round(diffTimeMs / (1000 * 60 * 60 * 24))

          return {
            number: rawIssue.number,
            body: rawIssue.body,
            createdAgo,
            title: rawIssue.title,
          }
        })
        setIssues(formattedIssues)
      })
  }

  const getIssue = async (number: number) => {
    return await api
      .get(`repos/${USER_NAME}/${BLOG_REPO_NAME}/issues/${number}`)
      .then((res) => console.log(res))
  }

  return (
    <GithubContext.Provider
      value={{ user, issues, totalIssues, getIssues, getIssue }}
    >
      {children}
    </GithubContext.Provider>
  )
}