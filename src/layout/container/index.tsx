import React from 'react'

interface props {
  children?: React.ReactNode
}

const Container: React.FC = (props: props) => {
  return <div>{props.children}</div>
}

export default Container
