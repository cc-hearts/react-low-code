import { Droppable } from '@/designer/drag'
import EmptyDesigner from '@/designer/empty/empty'
import { MaterialType } from '@/types'
import FrameWorkSchema from '@/designer/FrameWorkSchema'
interface IProps {
  schema: Array<MaterialType>
  setSchema: React.Dispatch<React.SetStateAction<Array<MaterialType>>>
}
function ViewPane({ schema, setSchema }: IProps) {
  const isEmpty = schema.length === 0
  return (
    <div className="flex-1">
      <Droppable>
        {isEmpty ? (
          <EmptyDesigner />
        ) : (
          <FrameWorkSchema schema={schema} setSchema={setSchema} />
        )}
      </Droppable>
    </div>
  )
}

export default ViewPane
