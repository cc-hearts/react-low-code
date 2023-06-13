import Header from '@/layouts/Header'
import ControlPane from './control/controlPane'
import ViewPane from './view/viewPane'
import AttributePane from './attribute/attributePane'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core/dist'
function WorkBench() {
  function handleOnDragEnd(over: DragEndEvent) {
    console.log(over)
  }

  return (
    <div className="flex w-full h-full flex-col">
      <Header />
      <DndContext onDragEnd={handleOnDragEnd}>
        <div className="flex-1 flex w-full">
          <ControlPane />
          <ViewPane />
          <AttributePane />
        </div>
        <DragOverlay>{/* TODO: */}</DragOverlay>
      </DndContext>
    </div>
  )
}

export default WorkBench
