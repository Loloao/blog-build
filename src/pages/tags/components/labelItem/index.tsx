import React from 'react'
import styles from './styles.module.scss'
import { LabelDetail } from '@/utils/classes'

interface Props {
  labelDetail: LabelDetail
}

const LabelItem = (props: Props) => {
  const {
    labelDetail: { name, color }
  } = props
  console.log(color, 'color')
  return (
    <div
      className={styles['item-wrapper']}
      style={{
        color: `#${color}`,
        borderColor: `#${color}`
      }}
    >
      <span className={styles['item-name']}>{name}</span>
    </div>
  )
}

export default LabelItem
