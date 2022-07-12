interface Props<T> {
  a: T
  b: T
}
import { useMemo, useState } from 'react'
const useMemoHook = (props: Props<number>) => {
  return useMemo(() => {
    return props.a + props.b
  }, [props.a, props.b])
}
export default function () {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(2)
  const [count, setCount] = useState(3)
  const data = useMemoHook({ a: count1, b: count2 })
  return (
    <>
      {data}
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
