import React from 'react'
import styles from './styles.module.scss'
import Timeline from '@/components/timeline'

const Categories = () => {
  return (
    <div className={styles['categories-wrapper']}>
      <h2 className={styles['categories-title']}>时间线</h2>
      <Timeline />
    </div>
  )
}

export default Categories
