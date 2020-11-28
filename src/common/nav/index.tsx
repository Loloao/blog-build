import React, { memo } from 'react'

interface navItem {
  name: string
}

interface props {
  list: ''
}

const Nav = memo(function Nav(props: props) {
  return <div>{props.list}</div>
})

export default Nav
