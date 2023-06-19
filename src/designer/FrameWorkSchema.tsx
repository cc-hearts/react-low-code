import type { MaterialType, RenderSchema } from '@/types'
import { Form } from 'antd'
import { SortableItem } from './drag/sortableItem'
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { materialTypeTransformMap } from '@/utils/shard'
import { useRenderSchema } from '@/hooks/useRenderSchema'
interface IProps {
  schema: Array<MaterialType>
  setSchema: React.Dispatch<React.SetStateAction<MaterialType[]>>
}

function FrameWorkSchema({ schema, setSchema }: IProps) {
  const ids = schema.map((val) => val.uuid) as UniqueIdentifier[]
  const renderSchema: RenderSchema[] = useRenderSchema(schema)

  const handleOnDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      const materialMap = materialTypeTransformMap(schema)
      const oldIndex = ids.indexOf(active.id)
      const newIndex = ids.indexOf(over.id)
      const newIds = arrayMove(ids, oldIndex, newIndex)
      const newSchema = newIds.map((id) => materialMap.get(id as string)!)
      setSchema(newSchema)
    }
  }

  return (
    <DndContext onDragEnd={handleOnDragEnd}>
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        <Form>
          {renderSchema.map((val) => {
            const Component = val.Component
            return (
              <SortableItem key={val.uuid} id={val.uuid}>
                <Form.Item label={val.attribute?.label}>
                  <Component {...val.attribute} />
                </Form.Item>
              </SortableItem>
            )
          })}
        </Form>
      </SortableContext>
    </DndContext>
  )
}

export default FrameWorkSchema
