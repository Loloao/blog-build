import Loadable from '@loadable/component'

export default (compPath: string) => {
  return Loadable(() => import(compPath))
}
