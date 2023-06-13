import { Droppable } from '@/designer/drag'
// 编辑区画布
function ViewPane() {
  return (
    <div className="flex-1">
      <Droppable>{/* form schema */}</Droppable>
    </div>
  )
}

export default ViewPane
