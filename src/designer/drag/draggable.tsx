import '@/assets/scss/designer/drag/draggable.scss'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import type { MaterialType } from '@/types'

interface IProps {
  id: string | number
  children?: React.ReactNode
  material?: MaterialType
}
const Draggable: React.FC<IProps> = (props) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
    data: props.material || {},
  })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="show-layout"
    >
      {props.children}
    </div>
  )
}
export default Draggable
