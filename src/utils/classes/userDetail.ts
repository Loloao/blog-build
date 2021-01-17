import { apiUser } from '../request/types'

class UserDetail implements apiUser {
  data?: apiUser
  login = ''
  id = 0
  node_id = ''
  avatar_url = ''
  gravatar_id = ''
  url = ''
  html_url = ''
  followers_url = ''
  following_url = ''
  gists_url = ''
  starred_url = ''
  subscriptions_url = ''
  organizations_url = ''
  repos_url = ''
  events_url = ''
  received_events_url = ''
  type = ''
  site_admin = false
  name = ''
  company: null
  blog = ''
  location = ''
  email: null
  hireable: null
  bio = ''
  twitter_username: null
  public_repos = 0
  public_gists = 0
  followers = 0
  following = 0
  created_at = ''
  updated_at = ''
  constructor(data?: apiUser) {
    this.data = data
    if (data) {
      this.login = this.data.login
      this.id = this.data.id
      this.node_id = this.data.node_id
      this.avatar_url = this.data.avatar_url
      this.gravatar_id = this.data.gravatar_id
      this.url = this.data.url
      this.html_url = this.data.html_url
      this.followers_url = this.data.followers_url
      this.following_url = this.data.following_url
      this.gists_url = this.data.gists_url
      this.starred_url = this.data.starred_url
      this.subscriptions_url = this.data.subscriptions_url
      this.organizations_url = this.data.organizations_url
      this.repos_url = this.data.repos_url
      this.events_url = this.data.events_url
      this.received_events_url = this.data.received_events_url
      this.type = this.data.type
      this.site_admin = this.data.site_admin
      this.name = this.data.name
      this.company = this.data.company
      this.blog = this.data.blog
      this.location = this.data.location
      this.email = this.data.email
      this.hireable = this.data.hireable
      this.bio = this.data.bio
      this.twitter_username = this.data.twitter_username
      this.public_repos = this.data.public_repos
      this.public_gists = this.data.public_gists
      this.followers = this.data.followers
      this.following = this.data.following
      this.created_at = this.data.created_at
      this.updated_at = this.data.updated_at
    }
  }

  static create(data?: apiUser) {
    return new UserDetail(data)
  }
}

export default UserDetail
