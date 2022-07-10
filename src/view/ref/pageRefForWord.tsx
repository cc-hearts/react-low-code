/**
 * @author heart
 * @description ref 转发事件
 * @Date 2022-07-05
 * @see: https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
 */
import React, { useRef, useEffect } from 'react'
import ClassButton from '../../components/button/class'

interface FactoryButtonInterface {
  [props: string]: any
}

class FactoryButton extends React.PureComponent<FactoryButtonInterface> {
  render() {
    return <ClassButton {...this.props} />
  }
}

const useCommonRef = () => {
  const ref = useRef<FactoryButton>(null)
  useEffect(() => {
    console.log(ref.current)
  }, [])
  return (
    <>
      <button
        onClick={() => {
          console.log(ref)
        }}
      >
        打印普通ref
      </button>
      {/* 透传text 但是不能透传ref */}
      <FactoryButton ref={ref} text='common ref' />
    </>
  )
}

interface CommonObject {
  text?: string
  [props: string]: any
}

// 由于在HOC中 像key和ref这种都是由react 特殊处理过的 无法和props的其他属性值一样进行透传
// https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref
const ForwardRef = React.forwardRef<ClassButton, CommonObject>((props, ref) => {
  // displayName 命名
  ForwardRef.displayName = `ClassButton${ForwardRef.displayName}`

  return <ClassButton {...props} ref={ref} />
})

export default () => {
  const ref = useRef<ClassButton>(null)
  useEffect(() => {
    console.log(ref.current?.handleClick())
  }, [])
  return (
    <>
      {useCommonRef()}
      <hr />
      <ForwardRef text={'forwardRef'} ref={ref} />
    </>
  )
}
