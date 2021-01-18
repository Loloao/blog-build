import React, { CSSProperties } from 'react'
import styles from './styles.module.scss'

interface props {
  children?: React.ReactNode
}

const Article = (props: props) => {
  return <div className={styles['content-article']}>{props.children}</div>
}

export default Article
