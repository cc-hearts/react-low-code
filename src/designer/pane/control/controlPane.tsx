import { useNamespace } from "@/hooks"
import classNames from "classnames"
import '@/assets/scss/designer/pane/control/control-pane.scss'
function ControlPane() {
  const ns = useNamespace('control-pane')
  const cls = classNames(ns.cls, 'w-40')
  return <div className={cls}>
  </div>
}

export default ControlPane