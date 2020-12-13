import React, { useEffect, useState } from 'react'
import { apiIssue } from '@/utils/request/types'

import styles from './styles.scss'
import { getIssues } from '@/utils/request'
import HomeListItem from './components/listItem'
import Pagination from '@/components/showMore'

const mockPage = {
  total: 10,
  pageNum: 3,
  currentPage: 2
}

const Home = () => {
  const { total, pageNum, currentPage } = mockPage
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
      <Pagination total={total} pageNum={pageNum} currentPage={currentPage} />
    </div>
  )
}

export default Home
