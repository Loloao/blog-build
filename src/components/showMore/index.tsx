import React from 'react'
import styles from './style.m.scss'

interface pageProps {
  isMore: boolean
  onShowMore: () => void
}

const ShowMore = (props: pageProps) => {
  const { isMore, onShowMore } = props
  const getContent = () => {
    let result
    if (isMore) {
      result = (
        <div className={styles['showMore-button']} onClick={onShowMore}>
          <span className={styles['main-text']}>加载更多</span>
          <i className={`fas fa-angle-double-down ${styles['icon-text']}`}></i>
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
