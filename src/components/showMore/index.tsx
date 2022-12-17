import React from 'react'
import { RequestLoading } from '@/components/loading'

interface pageProps {
  isMore: boolean
  isLoading?: boolean
  onShowMore: () => void
}

const ShowMore = (props: pageProps) => {
  const { isMore, onShowMore, isLoading } = props

  const showContent = () => {
    let result
    if (isLoading) {
      result = <RequestLoading />
    } else {
      result = (
        <div>
          <span>加载更多</span>
          <i className={'fas fa-angle-double-down'}></i>
        </div>
      )
    }
    return result
  }

  const getContent = () => {
    let result
    if (isMore) {
      result = <div onClick={onShowMore}>{showContent()}</div>
    } else {
      result = null
    }
    return result
  }
  return <div>{getContent()}</div>
}

export default ShowMore
