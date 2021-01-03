export const config = {
  BASE_URL: 'https://api.github.com'
}

const USER_NAME = 'Loloao'
const REPO_NAME = 'my-blog'

export const INIT_HOME_PER_PAGE = 5
export const INIT_HOME_PAGE = 1

export const url = {
  getProjectIssueUrl: (homePage: number, homePerPageNum: number): string =>
    `https://api.github.com/repos/${USER_NAME}/${REPO_NAME}/issues?page=${homePage}&per_page=${homePerPageNum}`,
  getIssueDetailUrl: (issueNumber: number | string): string => `/repos/${USER_NAME}/${REPO_NAME}/issues/${issueNumber}`
}
