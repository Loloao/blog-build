import React from 'react'
import styles from './style.m.scss'

const requestLoading: React.FC = () => {
  return (
    <div className={styles['loading-wrapper']}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default requestLoading
