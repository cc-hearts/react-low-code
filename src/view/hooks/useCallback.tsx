interface Props {
  a: number
  b: number
  obj: Record<string, unknown>
}
import { useCallback, useState } from 'react'

let prefixObject: Record<string, unknown> | null = null
const useCallbackHooks: React.FC<Props> = (props) => {
  const callFunc = useCallback(() => {
    console.log(props.a + props.b)
  }, [props.a, props.b])

  if (prefixObject === null) {
    prefixObject = props.obj
  } else {
    console.log(prefixObject === props.obj)
  }
  callFunc()
  return <></>
}

export default () => {
  const [count1] = useState(1)
  const [count2] = useState(2)
  const [count, setCount] = useState(0)
  const [object] = useState({})
  return (
    <>
      {useCallbackHooks({
        a: count1,
        b: count2,
        obj: object,
      })}
      count: {count}
      <button
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        count add
      </button>
    </>
  )
}
