import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Timeline, { sublineItem } from '@/components/timeline'
import { getTimelineIssues } from '@/utils/request'
import { IssueDetail } from '@/utils/classes'
import { stringifySearch } from '@/utils'

const Categories = () => {
  const [times, setTimes] = useState<sublineItem[]>([])

  useEffect(() => {
    getTimelineIssues().then((res) => {
      setTimes(
        res.map<sublineItem>((v) => {
          return {
            time: v.created_at,
            link: v.title,
            route: { pathname: '/detail', search: `${stringifySearch({ issueNumber: v.number })}` }
          }
        })
      )
    })
  }, [])

  return (
    <div className={styles['categories-wrapper']}>
      <h2 className={styles['categories-title']}>时间线</h2>
      <Timeline data={times} />
    </div>
  )
}

export default Categories
