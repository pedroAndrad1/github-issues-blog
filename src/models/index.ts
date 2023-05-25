export interface Issue {
  number: number
  body: string
  createdAgo: number
  title: string
}

export interface UserData {
  avatarUrl: string
  bio: string
  company: string
  followers: string
  htmlUrl: string
  login: string
  name: string
}

export interface IssueDetalhe {
  author: string
  createdAgo: number
  commentsAmount: number
  body: string
  url: string
}
