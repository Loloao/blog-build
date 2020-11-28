import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const navList = [
  { id: 0, title: '首页', link: '/' },
  { id: 1, title: '关于', link: '/about' },
  { id: 2, title: '标签', link: '/tags' },
  { id: 3, title: '日志', link: '/categories' }
]

const Nav = () => {
  return (
    <ul className={styles['navList']}>
      {navList.map((v) => {
        return (
          <li key={v.id} className={styles['navItem']}>
            <Link to={v.link}>{v.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav
