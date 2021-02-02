import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Timeline from '@/components/timeline'
import { getTimelineIssues } from '@/utils/request'
import { IssueDetail } from '@/utils/classes'

const Categories = () => {
  const [issues, setIssues] = useState<IssueDetail[]>([])

  useEffect(() => {
    getTimelineIssues().then(setIssues)
  }, [])

  return (
    <div className={styles['categories-wrapper']}>
      <h2 className={styles['categories-title']}>时间线</h2>
      <Timeline />
    </div>
  )
}

export default Categories
