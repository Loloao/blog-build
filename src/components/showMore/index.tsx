import React from 'react'
import styles from './style.m.scss'

interface pageProps {
  isMore: boolean
  onShowMore: () => {}
}

const Pagination = (props: pageProps) => {
  const { isMore, onShowMore } = props
  return (
    <div className={styles['pagination-wrapper']}>
      <span></span>
    </div>
  )
}

export default Pagination
