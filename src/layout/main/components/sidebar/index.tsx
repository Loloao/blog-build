import React, { useEffect, useState } from 'react'
import { getRecentIssues, getAllLabels } from '@/utils/request'
import { IssueDetail, LabelDetail } from '@/utils/classes'
import { useHistory } from 'react-router-dom'
import { stringifySearch } from '@/utils/index'

const Sidebar = () => {
  const [issueList, setIssueList] = useState<IssueDetail[]>([])
  const [labelList, setLabelList] = useState<LabelDetail[]>([])
  const history = useHistory()

  useEffect(() => {
    getRecentIssues().then((res) => {
      setIssueList(res)
    })

    getAllLabels().then((res) => {
      setLabelList(res.slice(0, 6))
      console.log(res, 'res')
    })
  }, [])

  const jumpToDetail = (issue: IssueDetail) => {
    history.push({ pathname: '/detail', search: stringifySearch({ issueNumber: issue.number }) })
  }

  const jumpToIssueList = (label: LabelDetail) => {
    const { name } = label
    history.push({ pathname: '/issueList', search: stringifySearch({ source: 'tags', labelNames: name }) })
  }

  return (
    <div>
      <div>
        <h3>最近更新</h3>
        <ul>
          {issueList.map((v) => {
            return (
              <li key={v.id} onClick={() => jumpToDetail(v)} title={v.title}>
                {v.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h3>标签趋势</h3>
        <ul>
          {labelList.map((v) => {
            return (
              <li key={v.id} onClick={() => jumpToIssueList(v)} title={v.name}>
                {v.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
