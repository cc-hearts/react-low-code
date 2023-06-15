import { Droppable } from '@/designer/drag'
import EmptyDesigner from '@/designer/empty/empty'
import { MaterialType } from '@/types';
import FrameWorkSchema from '@/designer/FrameWorkSchema';
import { useRenderSchema } from '@/hooks/useRenderSchema';
interface IProps {
  schema: Record<string,MaterialType>
}
function ViewPane({ schema }:IProps) {
  const isEmpty = Object.keys(schema).length === 0
  const renderSchema = useRenderSchema(schema)
  return (
    <div className="flex-1">
      <Droppable>
        {
          isEmpty ?  <EmptyDesigner /> : <FrameWorkSchema schema={renderSchema} />
        }
      </Droppable>
    </div>
  )
}

export default ViewPane
