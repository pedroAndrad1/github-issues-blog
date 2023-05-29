/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../lib/axios'
import { BLOG_REPO_NAME, USER_NAME } from '../../constants'
import { Issue, IssueDetalhe, UserData } from '../../models'

interface GithubContextData {
  user: UserData | undefined
  issues: Issue[]
  totalIssues: number
  getIssues: (query?: string) => Promise<void | Error>
  getIssue: (number: string) => Promise<IssueDetalhe>
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
    return api
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
    return api
      .get('search/issues', {
        params: {
          q: `${query} repo:${USER_NAME}/${BLOG_REPO_NAME}`,
        },
      })
      .then((res) => {
        setTotalIssues(res.data.total_count)
        const formattedIssues = (res.data.items as []).map((rawIssue: any) => {
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
      .catch((err) => new Error(err))
  }

  const getIssue = useCallback(
    async (number: string) =>
      api
        .get(`repos/${USER_NAME}/${BLOG_REPO_NAME}/issues/${number}`)
        .then(({ data }) => {
          const diffTimeMs = Math.abs(
            new Date().getTime() - new Date(data.created_at).getTime(),
          )
          const createdAgo = Math.round(diffTimeMs / (1000 * 60 * 60 * 24))
          return {
            author: data.user.login,
            createdAgo,
            commentsAmount: data.comments,
            title: data.title,
            body: data.body,
            url: data.html_url,
          } as IssueDetalhe
        }),
    [],
  )

  return (
    <GithubContext.Provider
      value={{ user, issues, totalIssues, getIssues, getIssue }}
    >
      {children}
    </GithubContext.Provider>
  )
}
