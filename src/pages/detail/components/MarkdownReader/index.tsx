import React, {useLayoutEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './styles.module.scss'

interface Props {
    text: string
}

const MarkdownReader = (props: Props) => {
    const {text} = props
    const getOlLiIndexElem = (index: number) => {
        const wrapper = document.createElement('div')
        wrapper.classList.add(styles['ol-li-index'])
        wrapper.innerText = `${index + 1}.`
        return wrapper
    }
    useLayoutEffect(() => {
        // 用于解决 ol 标签不显示前缀的问题
        document.getElementsByClassName(styles['reader'])[0].querySelectorAll('ol').forEach(v => {
            v.querySelectorAll('li').forEach((v1, i) => {
                v1.appendChild(getOlLiIndexElem(i))
            })
        })
    })
    return <>
        <ReactMarkdown children={text} className={styles['reader']} />
    </>
}

export default MarkdownReader