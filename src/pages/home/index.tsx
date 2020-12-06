import React, { useEffect, useState } from 'react'
import { apiIssue } from '@/utils/request/types'

import styles from './styles.scss'
import { getIssues } from '@/utils/request'
import HomeListItem from './components/listItem'

const Home = () => {
  const [issueList, setIssueList] = useState<apiIssue[]>([])
  useEffect(() => {
    getIssues().then((res) => {
      setIssueList(res)
    })
  }, [])
  return (
    <div className={styles['home-wrapper']}>
      <ul className={styles['main-wrapper']}>
        {issueList.map((v) => {
          return (
            <li key={v.id}>
              <HomeListItem issue={v} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
