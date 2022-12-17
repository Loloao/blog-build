import React from 'react'
import { IssueDetail } from '@/utils/classes'
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
          <div key={v.id}>
            <div>
              <div>
                {labels.map((v) => {
                  return <div key={v.id}>{v.name}</div>
                })}
              </div>
              <span onClick={() => jumpToIssueDetail(number)}>{title}</span>
              <p onClick={() => jumpToIssueDetail(number)}>{body}</p>
              <div>
                <span>{login}</span>
                <span>更新于{dateAgo(Date.parse(updated_at))}</span>
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
      return <div style={{ backgroundImage: `url(${img_src})` }}></div>
    } else {
      return null
    }
  }
}

export default HomeListItem
