import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export interface timelineItem {
  title?: string
  link?: string
  route?: string
}

interface props {
  data: timelineItem[]
}

const Timeline = (props: props) => {
  const getData = (item: timelineItem, index: number) => {
    if (item.title) {
      return (
        <div className={styles['title-wrapper']} key={item.title}>
          <h3>{item.title}</h3>
        </div>
      )
    } else if (item.time && item.link) {
      return (
        <div className={styles['link-wrapper']} key={item.link}>
          <div>{item.time}</div>
          <Link path={item.route}>
            <div>{item.link}</div>
          </Link>
        </div>
      )
    }
  }

  return (
    <div className={styles['timeline-wrapper']}>
      {props.data.map((v, i) => {
        return getData(v, i)
      })}
    </div>
  )
}

const data = [
  { title: '2019' },
  { time: '2020.1.1', link: '1231231', route: 'www.baidu.com' },
  { time: '2020.1.1', link: '2131231', route: 'www.baidu.com' },
  { time: '2020.1.1', link: '12312312', route: 'www.baidu.com' },
  { time: '2020.1.1', link: '1231213', route: 'www.baidu.com' },
  { title: '2020' },
  { time: '2020.1.2', link: '1214124', route: 'www.baidu.com' },
  { time: '2020.1.3', link: '123141', route: 'www.baidu.com' },
  { time: '2020.1.4', link: '1231', route: 'www.baidu.com' },
  { time: '2020.1.5', link: '15123', route: 'www.baidu.com' }
]

Timeline.defaultProps = {
  data
}

export default Timeline
