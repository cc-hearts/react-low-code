import { default as _Button } from './button'
import { mapMaterial } from '@/utils/mapper/mapMaterial'
import { MaterialSymbolsSmartButtonSharp } from './buttonIcons'

export const Button = mapMaterial(_Button, {
  displayName: 'Button',
  type: 'Button',
  icon: MaterialSymbolsSmartButtonSharp,
  group: 'base',
  attributes: {
    props: {
      text: 'button',
    }
  }
})
