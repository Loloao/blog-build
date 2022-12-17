import React, { useEffect, useState } from 'react'
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
    <div >
      <h2 >标签</h2>
      <ul >
        {allLabels.map((v) => {
          return <LabelItem labelDetail={v} key={v.id} />
        })}
      </ul>
    </div>
  )
}

export default Tags
