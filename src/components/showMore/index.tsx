import React from 'react'
import styles from './style.m.scss'
import { RequestLoading } from '@/components/loading'

interface pageProps {
  isMore: boolean
  isLoading?: boolean
  onShowMore: () => void
}

const ShowMore = (props: pageProps) => {
  const { isMore, onShowMore, isLoading } = props

  const showContent = () => {
    let result
    if (isLoading) {
      result = <RequestLoading />
    } else {
      result = (
        <div>
          <span className={styles['main-text']}>加载更多</span>
          <i className={`fas fa-angle-double-down ${styles['icon-text']}`}></i>
        </div>
      )
    }
    return result
  }

  const getContent = () => {
    let result
    if (isMore) {
      result = (
        <div className={styles['showMore-button']} onClick={onShowMore}>
          {showContent()}
        </div>
      )
    } else {
      result = null
    }
    return result
  }
  return <div className={styles['showMore-wrapper']}>{getContent()}</div>
}

export default ShowMore
