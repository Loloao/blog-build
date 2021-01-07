export interface issues {
  name: string
}

export interface IssueLabel {
  id: number
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description: string
}

export interface user {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: string
}

export interface assignee {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

export interface issueComment {
  url: string
  html_url: string
  issue_url: string
  id: number
  node_id: string
  user: user
  created_at: string
  updated_at: string
  author_association: string
  body: string
  performed_via_github_app: null
}

export interface apiIssue {
  url: string
  img_src?: string
  commentArr?: issueComment[]
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: user
  labels: IssueLabel[]
  state: string
  locked: boolean
  assignee: assignee | null
  assignees: assignee[]
  milestone: object | null
  comments: number
  created_at: string
  updated_at: string
  closed_at: null
  author_association: string
  active_lock_reason: object | null
  body: string
  performed_via_github_app: object | null
}
