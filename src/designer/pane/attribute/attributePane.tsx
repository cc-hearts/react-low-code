import { useNamespace } from "@/hooks"
import classNames from "classnames"
import '@/assets/scss/designer/pane/attribute/attribute-pane.scss'
function AttributePane() {
const ns = useNamespace('attribute-pane')
const cls = classNames(ns.cls, 'w-40')
  return <div className={cls}>
  attributePane
  </div>
}

export default AttributePane