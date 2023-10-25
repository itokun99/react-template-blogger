export interface BlogInfo {
  kind: string
  id: string
  name: string
  description: string
  published: string
  updated: string
  url: string
  selfLink: string
  posts: Posts
  pages: Pages
  locale: Locale
}

interface Posts {
  totalItems: number
  selfLink: string
}

interface Pages {
  totalItems: number
  selfLink: string
}

interface Locale {
  language: string
  country: string
  variant: string
}
