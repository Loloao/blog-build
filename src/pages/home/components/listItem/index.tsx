import React from 'react'
import { apiIssue } from '@/utils/request/types'
import style from './styles.m.scss'
import dateAgo from '@/utils/time/dateAgo'
import { stringifySearch } from '@/utils'
import { useHistory } from 'react-router-dom'

interface props {
  issue: apiIssue
}

const HomeListItem = (props: props) => {
  const {
    issue: {
      title,
      labels,
      body,
      img_src,
      user: { login },
      updated_at,
      number
    }
  } = props
  const history = useHistory()

  return (
    <div className={style['issueItem']}>
      <div className={style['issueContentWrapper']}>
        <div className={style['issueLabels']}>
          {labels.map((v) => {
            return (
              <div className={style['label']} key={v.id}>
                {v.name}
              </div>
            )
          })}
        </div>
        <span className={style['issueItemTitle']} onClick={jumpToIssueDetail}>{title}</span>
        <p className={style['issueItemContent']}>{body}</p>
        <div className={style['issueItemFooter']}>
          <span className={style['issueUser']}>{login}</span>
          <span className={style['issueUpdateDate']}>更新于{dateAgo(Date.parse(updated_at))}</span>
        </div>
      </div>
      {getImage(img_src)}
    </div>
  )

  function jumpToIssueDetail () {
    history.push({pathname: '/detail', search: `${stringifySearch({issueNumber: number})}`})
  }

  function getImage (img_src?: string) {
    if (img_src) {
      return <div className={style['mainImg']} style={{ backgroundImage: `url(${img_src})` }}></div>
    } else {
      return null
    }
  }
}

export default HomeListItem
