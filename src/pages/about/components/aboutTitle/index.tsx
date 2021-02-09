import React from 'react'
import styles from './styles.module.scss'

interface Props {
  children?: React.ReactElement
}

const AboutTitle = (props: Props) => {
  return <div className={styles['title-wrapper']}>{props.children}</div>
}

export default AboutTitle
