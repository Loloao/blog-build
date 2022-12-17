import React from 'react'
import { NavLink } from 'react-router-dom'

const navList = [
  { id: 0, title: '首页', link: '/home', icon: 'fa-home' },
  { id: 2, title: '标签', link: '/tags', icon: 'fa-tags' },
  { id: 3, title: '日志', link: '/categories', icon: 'fa-calendar' },
  { id: 1, title: '关于', link: '/about', icon: 'fa-user' }
]

const Nav = () => {
  return (
    <ul className="bg-black text-slate-400">
      {navList.map((v) => {
        return (
          <NavLink to={v.link} key={v.id}>
            <li>
              <span></span>
              {v.title}
            </li>
          </NavLink>
        )
      })}
    </ul>
  )
}

export default Nav
