import React from 'react'
import stlyes from './styles.scss'

interface props {
  children?: React.ReactNode
}

const Container: React.FC = (props: props) => {
  return <div className={stlyes['container']}>{props.children}</div>
}

export default Container
