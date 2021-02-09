import React from 'react'
import styles from './styles.module.scss'
import Title from './components/aboutTitle'
import Content from './components/aboutContent'

const About = () => {
  return (
    <div className={styles['about-wrapper']}>
      <h2 className={styles['about-title']}>关于</h2>
      <Title>title</Title>
      <Content>content</Content>
    </div>
  )
}

export default About
