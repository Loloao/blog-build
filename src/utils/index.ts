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
