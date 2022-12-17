import React, { useEffect, useState } from 'react'
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
    <div>
      <div>
        <div>
          <img src={user.avatar_url} />
        </div>
        <span onClick={jumpToHome}>{user.name}</span>
        <span>{user.bio}</span>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  )
}

export default SideBar
