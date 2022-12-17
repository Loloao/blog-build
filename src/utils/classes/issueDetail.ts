import { apiIssue, user, issueLabel, issueComment, assignee } from '../request/types'
import User from './user'

class IssueDetail implements apiIssue {
  data?: apiIssue
  url = ''
  img_src = ''
  commentArr: issueComment[] = []
  repository_url = ''
  labels_url = ''
  comments_url = ''
  events_url = ''
  html_url = ''
  id = 0
  node_id = ''
  number = 0
  title = ''
  user: user = User.create()
  labels: issueLabel[] = []
  state = ''
  locked = false
  assignee: assignee | null = null
  assignees: assignee[] = []
  milestone: object | null = null
  comments = 0
  created_at = ''
  updated_at = ''
  closed_at = null
  author_association = ''
  active_lock_reason: object | null = null
  body = ''
  performed_via_github_app: object | null = null
  constructor(data?: apiIssue) {
    this.data = data
    if (data) {
      this.url = data.url
      this.img_src = data.img_src || ''
      this.commentArr = data.commentArr || []
      this.repository_url = data.repository_url
      this.labels_url = data.labels_url
      this.comments_url = data.comments_url
      this.events_url = data.events_url
      this.html_url = data.html_url
      this.id = data.id
      this.node_id = data.node_id
      this.number = data.number
      this.title = data.title
      this.user = data.user
      this.labels = data.labels
      this.state = data.state
      this.locked = data.locked
      this.assignee = data.assignee
      this.assignees = data.assignees
      this.milestone = data.milestone
      this.comments = data.comments
      this.created_at = data.created_at
      this.updated_at = data.updated_at
      this.closed_at = data.closed_at
      this.author_association = data.author_association
      this.active_lock_reason = data.active_lock_reason
      this.body = data.body
      this.performed_via_github_app = data.performed_via_github_app
    }
  }

  static create(data?: apiIssue) {
    return new IssueDetail(data)
  }
}

export default IssueDetail
