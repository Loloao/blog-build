type obj = {
  [key: string]: string | number
}

export const getIssueImageSrc = (commentBody: string): string => {
  let result
  const regexp = /^!\[.+\]\((.+)\).*/
  const strArr = commentBody.match(regexp)
  if (strArr && strArr[1]) {
    result = strArr[1]
  } else {
    result = ''
  }
  return result
}

export const stringifySearch = (pathObj: obj): string => {
  const arr: string[] = []
  Object.keys(pathObj).forEach(v => {
    arr.push(`${v}=${pathObj[v]}`)
  })
  return `?${arr.join('&')}`
}

export const parseSearch = (search: string): obj => {
  const arr: string[] = search.slice(1).split('&')
  const result = Object.create(null)
  arr.forEach(v => {
    const itemArr = v.split('=')
    result[itemArr[0]] = itemArr[1]
  })
  return result
}
