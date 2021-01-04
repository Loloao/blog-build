import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useHistory } from 'react-router-dom'
import { getIssueDetail } from '@/utils/request'
import { parseSearch } from '@/utils'
import { IssueDetail } from '@/utils/classes'
import MarkdownReader from './components/MarkdownReader'
import gfm from 'remark-gfm'

const Detail = () => {
  const [issueDetail, setIssueDetail] = useState<IssueDetail>(IssueDetail.create())
  const history = useHistory()
  const query = parseSearch(history.location.search)
  useEffect(() => {
    getIssueDetail(query.issueNumber).then((res) => {
      setIssueDetail(res)
    })
  }, [])
  return (
    <div className={styles['detail-wrapper']}>
      <MarkdownReader text={issueDetail.body} />
    </div>
  )
}

export default Detail
