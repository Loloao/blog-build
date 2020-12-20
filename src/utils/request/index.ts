import Axios from 'axios'
import { config, url, INIT_HOME_PAGE, INIT_HOME_PER_PAGE } from './config'
import { apiIssue, issueComment } from './types'
import { getIssueImageSrc } from '@/utils'

const AxiosIns = Axios.create({
  baseURL: config.BASE_URL,
  headers: {
    accept: 'application/vnd.github+json'
  }
})

export const getIssues = async (currentPage?: number) => {
  currentPage = typeof currentPage !== 'number' ? INIT_HOME_PAGE : currentPage
  const res = await AxiosIns.get<apiIssue[]>(url.getProjectIssueUrl(currentPage, INIT_HOME_PER_PAGE))
  const issueArr = res.data
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
