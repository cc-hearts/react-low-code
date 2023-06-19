import { useSortable } from '@dnd-kit/sortable'

interface IProps {
  id: number | string
  children: React.ReactNode
}

export function SortableItem({ id, children }: IProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })
  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  )
}
