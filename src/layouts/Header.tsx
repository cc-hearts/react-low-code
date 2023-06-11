import { useNamespace } from "@/hooks/useNamespace"
import '@/assets/scss/components/headers.scss'
import classnames from 'classnames'

interface IProps {
  title?: () => React.ReactNode
  right?: () => React.ReactNode
}
function Header(props: IProps) {
  const ns = useNamespace('header')
  const titleClassNames = classnames(ns.cls, 'flex justify-between items-center px-3')
  const headerOperationPane = classnames(ns.e('icon'),'flex text-2xl items-center')
  const rightSlot = props.right?.() || <></>
  return <header className={titleClassNames}>
    {props.title?.() || <div></div>}
    <div className={headerOperationPane}>
      {rightSlot}
    </div>
  </header>
}

export default Header