import type { MaterialType } from '.'
export type MaterialTypeProvider<T> = T & {
  _view?: MaterialType
}
