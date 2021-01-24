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
  Object.keys(pathObj).forEach((v) => {
    arr.push(`${v}=${pathObj[v]}`)
  })
  return `?${arr.join('&')}`
}

export const parseSearch = (search: string): obj => {
  const arr: string[] = search.slice(1).split('&')
  const result = Object.create(null)
  arr.forEach((v) => {
    const itemArr = v.split('=')
    result[itemArr[0]] = itemArr[1]
  })
  return result
}

export const transferSixteenToRgbArr = (str: string): number[] => {
  const reg = /^([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  let sColor = str.toLowerCase()
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 3) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    //处理六位的颜色值
    const sColorChange = []
    for (let i = 0; i < 6; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return sColorChange
  } else {
    return []
  }
}
