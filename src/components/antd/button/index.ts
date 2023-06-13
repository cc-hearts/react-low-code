import { default as _Button } from './button'
import { mapMaterial } from '@/utils/mapper/mapMaterial'
import { MaterialSymbolsSmartButtonSharp } from './buttonIcons'

export const Button = mapMaterial(_Button,{
  displayName: 'Button',
  type: 'button',
  icon: MaterialSymbolsSmartButtonSharp,
  group: 'base',
})