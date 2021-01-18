import React, { FC } from 'react'
import styles from './styles.scss'

interface props {
  children?: React.ReactNode
}

const Content = (props: props) => {
  return <div className={styles['content']}>{props.children}</div>
}

export default Content
