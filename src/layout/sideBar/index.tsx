import React from 'react'
import styles from './styles.module.scss'
import Nav from '../../components/nav'
import { useHistory } from 'react-router-dom'

const SideBar = () => {
  const history = useHistory()

  const jumpToHome = () => {
    history.push('/')
  }

  return (
    <div className={styles['sideBar-wrapper']}>
      <span className={styles['title']} onClick={jumpToHome}>
        Loloao
      </span>
      <Nav />
    </div>
  )
}

export default SideBar
