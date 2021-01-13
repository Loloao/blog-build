import Axios from 'axios'
import { config, url, INIT_HOME_PAGE, INIT_HOME_PER_PAGE } from './config'
import { issueComment, IssueLabel } from './types'
import { getIssueImageSrc } from '@/utils'
import { IssueDetail, LabelDetail } from '@/utils/classes'

const AxiosIns = Axios.create({
  baseURL: config.BASE_URL,
  headers: {
    accept: 'application/vnd.github+json'
  }
})

export const getIssues = async (currentPage?: number) => {
  currentPage = typeof currentPage !== 'number' ? INIT_HOME_PAGE : currentPage
  const res = await AxiosIns.get<IssueDetail[]>(url.getProjectIssueUrl(currentPage, INIT_HOME_PER_PAGE))
  const issueArr = res.data.map((v) => IssueDetail.create(v))
  for (let i = 0; i < issueArr.length; i++) {
    const { comments_url, comments } = issueArr[i]
    let commentsList: issueComment[] = []
    if (comments > 0) {
      const commentRes = await AxiosIns.get<issueComment[]>(comments_url)
      commentsList = commentRes.data
    }
    if (commentsList[0] && commentsList[0].body) {
      issueArr[i].img_src = getIssueImageSrc(commentsList[0].body)
    } else {
      issueArr[i].img_src = ''
    }
  }
  return issueArr
}

const getMoreIssues = () => {
  let currentPage = INIT_HOME_PAGE
  return async function () {
    currentPage += 1
    return getIssues(currentPage)
  }
}
export const getMore = getMoreIssues()

export const getIssueDetail = (issueNumber: number | string): Promise<IssueDetail> => {
  return AxiosIns.get<IssueDetail>(url.getIssueDetailUrl(issueNumber)).then((res) => IssueDetail.create(res.data))
}

export const getAllLabels = (): Promise<IssueLabel[]> => {
  return AxiosIns.get<IssueLabel[]>(url.getLabelsUrl()).then((res) => res.data.map(LabelDetail.create))
}

export const getSelectLabelIssues = (labelList: string): Promise<IssueDetail[]> => {
  return AxiosIns.get<IssueDetail[]>(url.getSelectLabelIssuesUrl(labelList)).then((res) =>
    res.data.map(IssueDetail.create)
  )
}
