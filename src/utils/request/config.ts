const USER_NAME = 'Loloao'
const REPO_NAME = 'my-blog'
const HOME_PER_PAGE = '5'
const HOME_PAGE = '1'

export const config = {
  BASE_URL: 'https://api.github.com'
}

export const url = {
  GET_PROJECT_ISSUES: `https://api.github.com/repos/${USER_NAME}/${REPO_NAME}/issues?page=${HOME_PAGE}&per_page=${HOME_PER_PAGE}`
}
