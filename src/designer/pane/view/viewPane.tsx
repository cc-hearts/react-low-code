import { Droppable } from '@/designer/drag'
import EmptyDesigner from '@/designer/empty/empty'
// 编辑区画布
function ViewPane() {
  return (
    <div className="flex-1">
      <Droppable>
        <EmptyDesigner />
      </Droppable>
    </div>
  )
}

export default ViewPane
