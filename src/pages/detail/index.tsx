import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getIssueDetail } from '@/utils/request'
import { parseSearch } from '@/utils'
import { IssueDetail } from '@/utils/classes'
import MarkdownReader from './components/MarkdownReader'

const Detail = () => {
  const [issueDetail, setIssueDetail] = useState<IssueDetail>(IssueDetail.create())
  const history = useHistory()
  const query = parseSearch(history.location.search)
  useEffect(() => {
    getIssueDetail(query.issueNumber).then((res) => {
      setIssueDetail(res)
    })
  }, [query.issueNumber])
  return (
    <div >
      <MarkdownReader text={issueDetail.body} />
    </div>
  )
}

export default Detail
