import React from 'react'
import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
}

const Sidebar = (props: Props) => {
  return (
    <div className={styles['content-sidebar']}>
      <div className={styles['recent-update']}>
        <h3>最近更新</h3>
        <ul className={styles['update-list']}>
          <li>kankanksndf</li>
          <li>ksjflajsdklfjasd</li>
          <li>lskdjfl;a;fas;</li>
          <li>lasdfjl;ajsd</li>
        </ul>
      </div>
      <div className={styles['trend-tags']}>
        <h3>标签趋势</h3>
        <ul className={styles['tags-list']}>
          <li>kankan</li>
          <li>ksjfla</li>
          <li>lskdj</li>
          <li>las</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
