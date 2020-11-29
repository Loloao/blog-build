import React from 'react'
import { apiIssue } from '@/utils/request/types'

interface props {
  issue: apiIssue
}

const HomeListItem = (props: props) => {
  return <li>{props.issue.title}</li>
}

export default HomeListItem
