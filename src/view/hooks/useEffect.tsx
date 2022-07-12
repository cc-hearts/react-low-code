interface Props {
  a: number
  b: number
}
import { useState, useEffect } from 'react'
const useEffectHook = (props: Props) => {
  const [state, setState] = useState(0)
  useEffect(() => {
    // 执行副作用的操作 比如 请求接口 消息的发布订阅 更改DOM等都属于副作用

    // 依赖父节点的a 和 b 每次变更则请求接口 类似于 watch

    setState((count) => count + 1)

    return () => {
      // 清除副作用的操作 比如 清除监听等
    }
  }, [props.a, props.b])

  return state
}

export default () => {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(2)
  const [count, setCount] = useState(3)
  const data = useEffectHook({ a: count1, b: count2 })
  return (
    <>
      刷新次数:{data}
      <br />
      count: {count}
      <br />
      <button
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        add count
      </button>
      <br />
      <button onClick={() => setCount1((count) => count + 1)}>increased</button>
      <br />
      <button onClick={() => setCount2((count) => count - 1)}>decreased</button>
    </>
  )
}
