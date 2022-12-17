import React from 'react'

interface Props {
  children?: React.ReactElement
}

const AboutTitle = (props: Props) => {
  return <div >{props.children}</div>
}

export default AboutTitle
