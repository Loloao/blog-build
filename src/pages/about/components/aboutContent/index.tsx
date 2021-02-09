import React from 'react'
import styles from './styles.module.scss'

interface Props {
  children?: React.ReactElement
}

const AboutContent = (props: Props) => {
  return <div className={styles['content-wrapper']}>{props.children}</div>
}

export default AboutContent
