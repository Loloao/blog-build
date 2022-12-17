import React, { FC } from 'react'

interface props {
  children?: React.ReactNode
}

const Content = (props: props) => {
  return <div>{props.children}</div>
}

export default Content
