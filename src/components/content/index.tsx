import React from 'react'
import styles from './styles.scss'

interface props {
  children?: React.ReactNode
}

const Content: React.FC = (props: props) => {
  return <div className={styles['content']}>{props.children}</div>
}

export default Content
