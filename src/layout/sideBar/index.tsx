import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Nav from '../../components/nav'
import { useHistory } from 'react-router-dom'
import { getUser } from '@/utils/request'
import { UserDetail } from '@/utils/classes'

const SideBar = () => {
  const [user, setUser] = useState<UserDetail>(UserDetail.create())
  const history = useHistory()

  const jumpToHome = () => {
    history.push('/')
  }

  useEffect(() => {
    getUser().then((res) => {
      setUser(res)
    })
  }, [])

  return (
    <div className={styles['sideBar-wrapper']}>
      <div className={styles['profile-wrapper']}>
        <div className={styles['avatar-wrapper']}>
          <img className={styles['avatar']} src={user.avatar_url} />
        </div>
        <span className={styles['title']} onClick={jumpToHome}>
          {user.name}
        </span>
      </div>
      <div className={styles['nav-wrapper']}>
        <Nav />
      </div>
    </div>
  )
}

export default SideBar
