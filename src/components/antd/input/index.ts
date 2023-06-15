import { mapMaterial } from '@/utils/mapper/mapMaterial'
import { default as _Input } from './input'
import { IconoirInputSearch } from './inputIcons'

export const Input = mapMaterial(_Input, {
  displayName: 'Input',
  type: 'Input',
  icon: IconoirInputSearch,
  group: 'base',
  attributes: {
    label: 'input',
  }
})