import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { getAllLabels } from '@/utils/request'
import { LabelDetail } from '@/utils/classes'

import LabelItem from './components/labelItem'

const Tags = () => {
  const [allLabels, setAllLabels] = useState<LabelDetail[]>([])
  useEffect(() => {
    getAllLabels().then((res) => {
      setAllLabels(res)
    })
  }, [])
  return (
    <div className={styles['tags-wrapper']}>
      <h2>标签</h2>
      <ul className={styles['tags-list']}>
        {allLabels.map((v) => {
          return <LabelItem labelDetail={v} key={v.id} />
        })}
      </ul>
    </div>
  )
}

export default Tags
