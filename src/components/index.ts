import * as Components from './antd'
import type { MaterialType } from '@/types'

export const materialList = Object.values(Components).reduce<{
  [key: string]: MaterialType[]
}>((acc, cur) => {
  const _view = Reflect.get(cur, '_view')
  if (_view) {
    const materialGroupName = Reflect.get(_view, 'group')
    let materialGroup = Reflect.get(acc, materialGroupName)
    if (!materialGroup) {
      materialGroup = []
      Reflect.set(acc, materialGroupName, materialGroup)
    }
    materialGroup.push(_view)
  }
  return acc
}, {})

console.log(Components);

export default Components