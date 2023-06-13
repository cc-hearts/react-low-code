import { useNamespace } from '@/hooks'
import classNames from 'classnames'
import '@/assets/scss/designer/pane/attribute/attribute-pane.scss'
function AttributePane() {
  const ns = useNamespace('attribute-pane')
  const cls = classNames(ns.cls, 'w-60')
  return <div className={cls}>{/* TODO： */}</div>
}

export default AttributePane
