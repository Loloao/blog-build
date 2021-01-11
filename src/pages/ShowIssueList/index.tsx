import React, { useEffect, useState } from 'react'
import IssueList from '@/components/IssueList'
import { apiIssue } from '@/utils/request/types'
import { IssueDetail } from '@/utils/classes'

interface Props {
  getList(): Promise<apiIssue[]>
}

function ShowIssueList(props: Props) {
  const { getList } = props
  const [list, setList] = useState<IssueDetail[]>([])
  useEffect(() => {
    getList().then(res => {
      setList(res.map(IssueDetail.create))
    })
  })

  return <IssueList issueList={list} />
}

export default ShowIssueList