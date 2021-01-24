export const config = {
  BASE_URL: 'https://api.github.com'
}

const USER_NAME = 'Loloao'
const REPO_NAME = 'my-blog'

// 首页每页数量和页码
export const INIT_HOME_PER_PAGE = 5
export const INIT_HOME_PAGE = 1

// 最近更新每页数量和页码
export const RECENT_PER_PAGE = 5
export const RECENT_PAGE = 1

export const url = {
  getProjectIssueUrl: (homePage: number, homePerPageNum: number): string =>
    `/repos/${USER_NAME}/${REPO_NAME}/issues?page=${homePage}&per_page=${homePerPageNum}`,

  getIssueDetailUrl: (issueNumber: number | string): string => `/repos/${USER_NAME}/${REPO_NAME}/issues/${issueNumber}`,

  getLabelsUrl: (): string => `/repos/${USER_NAME}/${REPO_NAME}/labels`,

  getSelectLabelIssuesUrl: (labelListStr: string): string =>
    `/repos/${USER_NAME}/${REPO_NAME}/issues?labels=${labelListStr}`,

  getUserDetail: (): string => `/users/${USER_NAME}`,

  getRecentIssues: () =>
    `/repos/${USER_NAME}/${REPO_NAME}/issues?page=${RECENT_PAGE}&per_page=${RECENT_PER_PAGE}&sort=updated`
}
