/* eslint-disable camelcase */
import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface UserData {
  avatarUrl: string
  bio: string
  company: string
  followers: string
  htmlUrl: string
  login: string
  name: string
}
interface GithubContextData {
  user: UserData | undefined
}

interface GithubContextProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextData)

export const GithubContextProvider = ({ children }: GithubContextProps) => {
  const [user, setUser] = useState<UserData>()

  useEffect(() => {
    api
      .get('/users/pedroAndrad1')
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
  }, [])

  return (
    <GithubContext.Provider value={{ user }}>{children}</GithubContext.Provider>
  )
}
