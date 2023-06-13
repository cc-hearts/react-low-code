import type { MaterialType, MaterialTypeProvider } from '@/types'

export function mapMaterial<T extends React.FC>(
  component: T,
  material: MaterialType
): MaterialTypeProvider<T> {
  Reflect.set(component, '_view', material)
  return component
}
