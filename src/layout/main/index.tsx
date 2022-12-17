import React, { FC } from 'react'
import Article from './components/article'
import SideBar from './components/sidebar'

interface props {
  children?: React.ReactNode
}

type ContentComp = FC & {
  Article: FC
  SideBar: FC
}

const Content: ContentComp = (props: props) => {
  return <div>{props.children}</div>
}

Content.Article = Article
Content.SideBar = SideBar

export default Content
