import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './styles.module.scss'

interface Props {
    text: string
}

const MarkdownReader = (props: Props) => {
    const {text} = props
    return <>
        <ReactMarkdown children={text} className={styles['reader']} />
    </>
}

export default MarkdownReader