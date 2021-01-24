import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { getRecentIssues } from '@/utils/request'
import { IssueDetail } from '@/utils/classes'
import { useHistory } from 'react-router-dom'
import { stringifySearch } from '@/utils/index'

interface Props {
  children?: React.ReactNode
}

const Sidebar = (props: Props) => {
  const [issueList, setIssueList] = useState<IssueDetail[]>([])
  const history = useHistory()

  useEffect(() => {
    getRecentIssues().then((res) => {
      setIssueList(res)
    })
  })

  const jumpToDetail = (issue: IssueDetail) => {
    history.push({ pathname: '/detail', search: stringifySearch({ issueNumber: issue.number }) })
  }

  return (
    <div className={styles['content-sidebar']}>
      <div className={styles['recent-update']}>
        <h3>最近更新</h3>
        <ul className={styles['update-list']}>
          {issueList.map((v) => {
            return (
              <li key={v.id} onClick={() => jumpToDetail(v)}>
                {v.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles['trend-tags']}>
        <h3>标签趋势</h3>
        <ul className={styles['tags-list']}>
          <li>kankan</li>
          <li>ksjfla</li>
          <li>lskdj</li>
          <li>las</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
