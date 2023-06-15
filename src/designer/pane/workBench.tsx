import Header from '@/layouts/Header'
import ControlPane from './control/controlPane'
import ViewPane from './view/viewPane'
import AttributePane from './attribute/attributePane'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core/dist'
import { useState } from 'react'
import { defineUUID } from '@/utils/crypto'
import { MaterialType } from '@/types'
function WorkBench() {

  const [schema, setSchema] = useState({} as Record<string,MaterialType>)
  function handleOnDragEnd(over: DragEndEvent) {
    const cur = over.active.data.current
    let uuid = defineUUID()
    while(Reflect.get(schema, uuid)) {
      uuid = defineUUID()
    }
    Reflect.set(schema, uuid, cur)
    setSchema({...schema})
  }

  return (
    <div className="flex w-full h-full flex-col">
      <Header />
      <DndContext onDragEnd={handleOnDragEnd}>
        <div className="flex-1 flex w-full">
          <ControlPane />
          <ViewPane schema={schema} />
          <AttributePane />
        </div>
        <DragOverlay>{/* TODO: */}</DragOverlay>
      </DndContext>
    </div>
  )
}

export default WorkBench
