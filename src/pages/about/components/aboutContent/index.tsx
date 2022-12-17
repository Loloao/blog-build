import React from 'react'

interface Props {
  children?: React.ReactElement
}

const AboutContent = (props: Props) => {
  return <div >{props.children}</div>
}

export default AboutContent
