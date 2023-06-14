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
    isOver ? 'border-sky-500' : 'border-gray-300',
    'h-full box-border border-dashed  border'
  )
  return (
    <div className={cls} ref={setNodeRef}>
      {children}
    </div>
  )
}

export default Droppable
