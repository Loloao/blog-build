import React from 'react'
import { useHistory } from 'react-router-dom'
import style from './style.scss'
import Nav from '../nav'

const Header = () => {
  const history = useHistory()

  const jumpToHome = () => {
    history.push('/')
  }

  return (
    <header className={style['header']}>
      <span className={style['title']} onClick={jumpToHome}>
        Loloao
      </span>
      <Nav />
    </header>
  )
}

export default Header
