import { default as _Button } from './button'
import { MaterialTypeProvider } from '@/types'
import { mapMaterial } from '@/utils/mapper/mapMaterial'
const Button:MaterialTypeProvider<typeof _Button> = _Button


mapMaterial(_Button,{
  displayName: 'Button',
})
export default Button