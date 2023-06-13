import { useDroppable } from '@dnd-kit/core'
import classNames from 'classnames'

interface IProps {
  children: React.ReactNode
}
const Droppable: React.FC<IProps> = ({ children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: '',
  })
  const cls = classNames(
    isOver ? 'border border-dashed border-sky-500' : '',
    'h-full box-border'
  )
  return (
    <div className={cls} ref={setNodeRef}>
      {children}
    </div>
  )
}

export default Droppable
