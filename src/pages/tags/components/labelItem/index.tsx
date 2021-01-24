import React from 'react'
import styles from './styles.module.scss'
import { LabelDetail } from '@/utils/classes'
import { useHistory } from 'react-router-dom'
import { stringifySearch, transferSixteenToRgbArr } from '@/utils'

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

  const getBackgroundColor = () => {
    const backgroundAlpha = '0.2'
    const colorRgb = transferSixteenToRgbArr(color)
    const result = `rgba(${colorRgb.join(',')}, ${backgroundAlpha})`
    console.log(color, result, 'result')
    return result
  }

  return (
    <div
      className={styles['item-wrapper']}
      style={{
        color: `#${color}`,
        borderColor: `#${color}`,
        backgroundColor: getBackgroundColor()
      }}
      onClick={() => jumpToIssueList(name)}
    >
      <span title={name} className={styles['item-name']}>
        {name}
      </span>
    </div>
  )
}

export default LabelItem
