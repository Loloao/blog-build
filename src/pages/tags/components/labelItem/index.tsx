import React from 'react'
import styles from './styles.module.scss'
import { LabelDetail } from '@/utils/classes'
import { useHistory } from 'react-router-dom'
import { stringifySearch } from '@/utils'

interface Props {
  labelDetail: LabelDetail
}

const LabelItem = (props: Props) => {
  const history = useHistory()
  const {
    labelDetail: { name, color }
  } = props

  const jumpToIssueList = (name: string) => {
    history.push({ pathname: '/issueList', search: stringifySearch({ source: 'tags', labelNames: name }) })
  }

  return (
    <div
      className={styles['item-wrapper']}
      style={{
        color: `#${color}`,
        borderColor: `#${color}`
      }}
      onClick={() => jumpToIssueList(name)}
    >
      <span className={styles['item-name']}>{name}</span>
    </div>
  )
}

export default LabelItem
