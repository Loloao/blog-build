import React, { CSSProperties } from 'react'

interface props {
  children?: React.ReactNode
}

const Article = (props: props) => {
  return <div>{props.children}</div>
}

export default Article
