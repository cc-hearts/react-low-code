import type { MaterialType, RenderSchema } from '@/types'
import Components from '@/components'

export function useRenderSchema(schema: Array<MaterialType>): RenderSchema[] {
  return Object.values(schema).map((schema) => {
    const { type, uuid, attributes } = schema
    return {
      Component: Reflect.get(Components, type) as React.FC,
      attribute: attributes as MaterialType['attributes'],
      uuid,
    }
  })
}
