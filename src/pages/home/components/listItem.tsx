import React from 'react'
import { apiIssue } from '@/utils/request/types'

interface props {
  issue: apiIssue
}

const HomeListItem = (props: props) => {
  return <div>{props.issue.title}</div>
}

export default HomeListItem
