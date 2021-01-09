import React, { useEffect, useState } from 'react'
import { apiIssue } from '@/utils/request/types'
import { Route, Redirect } from 'react-router-dom'

import styles from './styles.scss'
import { getIssues, getMore } from '@/utils/request'
import IssueList from '@/components/IssueList'
import ShowMore from '@/components/showMore'

const Home = () => {
  const [issueList, setIssueList] = useState<apiIssue[]>([])
  const [isMore, setIsMore] = useState<boolean>(true)
  const [isShowMoreLoading, setIsShowMoreLoading] = useState<boolean>(false)
  useEffect(() => {
    getIssues().then((res) => {
      setIssueList(res)
    })
  }, [])

  const showMore = (): void => {
    setIsShowMoreLoading(true)
    getMore().then((res) => {
      setIsShowMoreLoading(false)
      if (res.length > 0) {
        const AllIssues = issueList.concat(res)
        setIssueList(AllIssues)
        setIsMore(true)
      } else {
        setIsMore(false)
      }
    })
  }
  return (
    <div className={styles['home-wrapper']}>
      <IssueList issueList={issueList} />
      <ShowMore onShowMore={showMore} isMore={isMore} isLoading={isShowMoreLoading} />
    </div>
  )
}

export default Home
