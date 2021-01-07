import { IssueLabel } from '@/utils/request/types'

class LabelDetail implements IssueLabel {
  data?: IssueLabel
  id = 0
  node_id = ''
  url = ''
  name = ''
  color = ''
  default = false
  description = ''
  constructor(data?: IssueLabel) {
    this.data = data
    if (this.data) {
      this.id = this.data.id
      this.node_id = this.data.node_id
      this.url = this.data.url
      this.name = this.data.name
      this.color = this.data.color
      this.default = this.data.default
      this.description = this.data.description
    }
  }

  static create(data?: IssueLabel) {
    return new LabelDetail(data)
  }
}

export default LabelDetail
