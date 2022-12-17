import React, { useEffect, useState } from 'react'
import IssueList from '@/components/IssueList'
import { IssueDetail } from '@/utils/classes'
import { getSelectLabelIssues } from '@/utils/request'
import { useHistory } from 'react-router-dom'
import { parseSearch } from '@/utils'

function ShowIssueList() {
  const [list, setList] = useState<IssueDetail[]>([])
  const history = useHistory()
  const {
    location: { search }
  } = history
  const query = parseSearch(search)
  let getListRequest: Promise<IssueDetail[]>
  switch (query.source) {
    case 'tags':
      getListRequest = getSelectLabelIssues(query.labelNames as string)
      break
    default:
      getListRequest = new Promise((resolve) => resolve([]))
  }
  useEffect(() => {
    getListRequest.then((res) => {
      setList(res)
    })
  }, [search])

  return (
    <div >
      <IssueList issueList={list} />
    </div>
  )
}

export default ShowIssueList
