import type { MaterialType, RenderSchema } from '@/types'
import Components from '@/components'

export function useRenderSchema(
  schema: Record<string, MaterialType>
): RenderSchema[] {
  return Object.entries(schema).map(([key, schema]) => {
    const { type } = schema
    const Component = Reflect.get(Components, type) as React.FC
    return {
      Component,
      attribute: Reflect.get(
        schema as MaterialType,
        'attributes'
      ) as MaterialType['attributes'],
      uuid: key,
    }
  })
}
