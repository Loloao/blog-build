import React, { useEffect, useState } from 'react'
import IssueList from '@/components/IssueList'
import { IssueDetail } from '@/utils/classes'
import { useHistory } from 'react-router-dom'

function ShowIssueList() {
  const [list, setList] = useState<IssueDetail[]>([])
  useEffect(() => {
    // getList().then(res => {
    //   setList(res)
    // })
  })

  return <IssueList issueList={list} />
}

export default ShowIssueList