import { MaterialType } from '@/types'

/**
 * Creates a map of MaterialType objects keyed by their uuid property.
 *
 * @param {Array<MaterialType>} materialType - an array of MaterialType objects
 * @return {Map<string, MaterialType>} - a Map of MaterialType objects keyed by their uuid property
 */
export function materialTypeTransformMap(materialType: Array<MaterialType>) {
  const map = new Map<string, MaterialType>()

  materialType.forEach((material) => {
    const { uuid } = material
    map.set(uuid, material)
  })

  return map
}
