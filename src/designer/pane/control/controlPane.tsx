import { useNamespace } from '@/hooks'
import classNames from 'classnames'
import { materialList } from '@/components/index'
import { MaterialType } from '@/types'
import ControlIcons from './controlIcons'
import { Draggable } from '@/designer/drag'
import '@/assets/scss/designer/pane/control/control-pane.scss'

const ComponentTab: React.FC<{ materialGroup: Array<MaterialType> }> = ({
  materialGroup,
}) => {
  const ns = useNamespace('control-tab')
  const cls = classNames(ns.cls, 'grid grid-cols-3 grid-gap-1px')
  return (
    <div className={cls}>
      {materialGroup.map((material) => {
        const Icons =
          typeof material.icon === 'string' ? () => <></> : material.icon
        return (
          <Draggable key={material.type} id={material.type} material={material}>
            <div
              className={classNames(
                'h-15 flex flex-col items-center cursor-pointer'
              )}
            >
              <div className="flex-1 flex items-center">
                <ControlIcons component={Icons} />
              </div>
              <span className="h-5 w-full text-center leading-4 ">
                {material.displayName}
              </span>
            </div>
          </Draggable>
        )
      })}
    </div>
  )
}
function ControlPane() {
  const ns = useNamespace('control-pane')
  const cls = classNames(ns.cls, 'w-60')
  return (
    <div className={cls}>
      {Object.keys(materialList).map((materialGroup) => {
        return (
          <ComponentTab
            materialGroup={materialList[materialGroup]}
            key={materialGroup}
          />
        )
      })}
    </div>
  )
}

export default ControlPane
