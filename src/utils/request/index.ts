import Axios, { AxiosRequestConfig } from 'axios'
import { config, url } from './config'

const AxiosIns = Axios.create({
  baseURL: config.BASE_URL,
  headers: {
    accept: 'application/vnd.github+json'
  }
})

const getRequest = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const res = await Axios.get(url, config)
    return res.data
  } catch (e) {
    console.log(e, 'errrrrr')
  }
}

export const getIssues = getRequest(url.GET_PROJECT_ISSUES)
