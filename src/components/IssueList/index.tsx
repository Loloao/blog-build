import React from 'react'
import { IssueDetail } from '@/utils/classes'
import style from './styles.m.scss'
import dateAgo from '@/utils/time/dateAgo'
import { stringifySearch } from '@/utils'
import { useHistory } from 'react-router-dom'

interface props {
  issueList: IssueDetail[]
}

const HomeListItem = (props: props) => {
  const { issueList } = props
  const history = useHistory()

  return (
    <ul>
      {issueList.map((v) => {
        const {
          title,
          labels,
          body,
          img_src,
          user: { login },
          updated_at,
          number
        } = v
        return (
          <div className={style['issueItem']} key={v.id}>
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
              <span className={style['issueItemTitle']} onClick={() => jumpToIssueDetail(number)}>
                {title}
              </span>
              <p className={style['issueItemContent']} onClick={() => jumpToIssueDetail(number)}>
                {body}
              </p>
              <div className={style['issueItemFooter']}>
                <span className={style['issueUser']}>{login}</span>
                <span className={style['issueUpdateDate']}>更新于{dateAgo(Date.parse(updated_at))}</span>
              </div>
            </div>
            {getImage(img_src)}
          </div>
        )
      })}
    </ul>
  )

  function jumpToIssueDetail(number: number) {
    history.push({ pathname: '/detail', search: `${stringifySearch({ issueNumber: number })}` })
  }

  function getImage(img_src?: string) {
    if (img_src) {
      return <div className={style['mainImg']} style={{ backgroundImage: `url(${img_src})` }}></div>
    } else {
      return null
    }
  }
}

export default HomeListItem
