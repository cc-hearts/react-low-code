import '@/assets/scss/designer/drag/draggable.scss'
import { useDraggable } from '@dnd-kit/core'

interface IProps {
  id: string | number
  children?: React.ReactNode
}
const Draggable: React.FC<IProps> = (props) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
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
