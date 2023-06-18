import classNames from 'classnames'
import ControlIcons from './controlIcons'

interface IProps {
  Icon: React.FC
  displayName: string
  isDrag?: boolean
}

export const ComponentNode: React.FC<IProps> = ({
  Icon,
  displayName,
  isDrag = false,
}) => {
  return (
    <div
      className={classNames(
        'h-15 flex flex-col items-center cursor-pointer',
        isDrag ? 'border-dotted border-2 border-sky-500' : ''
      )}
    >
      <div className="flex-1 flex items-center">
        <ControlIcons component={Icon} />
      </div>
      <span className="h-5 w-full text-center leading-4 ">{displayName}</span>
    </div>
  )
}
