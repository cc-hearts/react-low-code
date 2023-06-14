import '@/assets/scss/designer/drag/draggable.scss'
import { useDraggable } from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities';

interface IProps {
  id: string | number
  children?: React.ReactNode
}
const Draggable: React.FC<IProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  })

  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="show-layout"
    >
      {props.children}
    </div>
  )
}
export default Draggable
