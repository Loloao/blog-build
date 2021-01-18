import React from 'react'

interface Props {
  children?: React.ReactNode
}

const Sidebar = (props: Props) => {
  return <div>{props.children}</div>
}

export default Sidebar
