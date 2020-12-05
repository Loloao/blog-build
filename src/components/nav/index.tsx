import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const navList = [
  { id: 0, title: '首页', link: '/', icon: 'fa-home' },
  { id: 2, title: '标签', link: '/tags', icon: 'fa-tags' },
  { id: 3, title: '日志', link: '/categories', icon: 'fa-calendar' },
  { id: 1, title: '关于', link: '/about', icon: 'fa-user' }
]

const Nav = () => {
  return (
    <ul className={styles['navList']}>
      {navList.map((v) => {
        return (
          <li key={v.id} className={styles['navItem']}>
            <span className={styles['navItemIcon']}>
              <i className={`fas ${v.icon}`}></i>
            </span>
            <Link to={v.link}>{v.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav
