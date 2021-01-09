import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.scss'

const navList = [
  { id: 0, title: '首页', link: '/home', icon: 'fa-home' },
  { id: 2, title: '标签', link: '/tags', icon: 'fa-tags' },
  { id: 3, title: '日志', link: '/categories', icon: 'fa-calendar' },
  { id: 1, title: '关于', link: '/about', icon: 'fa-user' }
]

const Nav = () => {
  return (
    <ul className={styles['navList']}>
      {navList.map((v) => {
        return (
          <NavLink to={v.link} activeClassName={styles['activeItem']} key={v.id} className={styles['navItem']}>
            <li>
              <span className={styles['navItemIcon']}>
                <i className={`fas ${v.icon}`}></i>
              </span>
              {v.title}
            </li>
          </NavLink>
        )
      })}
    </ul>
  )
}

export default Nav
