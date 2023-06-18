import Header from '@/layouts/Header'
import ControlPane from './control/controlPane'
import ViewPane from './view/viewPane'
import AttributePane from './attribute/attributePane'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core/dist'
import { useState } from 'react'
import { defineUUID } from '@/utils/crypto'
import { MaterialType } from '@/types'
import { ComponentNode } from '@/designer/pane/control/componentNode'
function WorkBench() {
  const [schema, setSchema] = useState({} as Record<string, MaterialType>)
  const [overlayData, setOverlayData] = useState({} as Partial<MaterialType>)
  function handleOnDragEnd(over: DragEndEvent) {
    if (over?.over?.id === 'viewPane') {
      const cur = over.active.data.current
      let uuid = defineUUID()
      while (Reflect.get(schema, uuid)) {
        uuid = defineUUID()
      }
      Reflect.set(schema, uuid, cur)
      setSchema({ ...schema })
    }
  }
  const handleOnDragStart = (over: DragStartEvent) => {
    const { icon, displayName } = over.active.data.current || {}
    setOverlayData({
      icon,
      displayName,
    })
  }

  return (
    <div className="flex w-full h-full flex-col">
      <Header />
      <DndContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
        <div className="flex-1 flex w-full">
          <ControlPane />
          <ViewPane schema={schema} />
          <AttributePane />
        </div>
        <DragOverlay>
          <ComponentNode
            Icon={overlayData.icon as React.FC}
            displayName={overlayData.displayName || ''}
            isDrag
          />
        </DragOverlay>
      </DndContext>
    </div>
  )
}

export default WorkBench
