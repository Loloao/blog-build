import React from 'react'
import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
}

const Sidebar = (props: Props) => {
  return <div className={styles['content-sidebar']}>{props.children}</div>
}

export default Sidebar
