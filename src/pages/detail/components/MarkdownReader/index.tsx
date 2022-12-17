/* eslint-disable react/no-children-prop */
import React, { useLayoutEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  text: string
}

const MarkdownReader = (props: Props) => {
  const renderers = {
    code: function Code({ language, value }: { language: string; value: string }) {
      return <SyntaxHighlighter style={a11yDark} language={language} children={value} />
    }
  }
  const { text } = props
  const getOlLiIndexElem = (index: number) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add(styles['ol-li-index'])
    wrapper.innerText = `${index + 1}.`
    return wrapper
  }
  useLayoutEffect(() => {
    // 用于解决 ol 标签不显示前缀的问题
    document
      .getElementsByClassName(styles['reader'])[0]
      .querySelectorAll('ol')
      .forEach((v) => {
        v.querySelectorAll('li').forEach((v1, i) => {
          v1.appendChild(getOlLiIndexElem(i))
        })
      })
  })
  return <ReactMarkdown children={text}  renderers={renderers} />
}

export default MarkdownReader
