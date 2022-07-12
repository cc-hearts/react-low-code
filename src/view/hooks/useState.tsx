/**
 * @author heart
 * @description useState的使用方法
 * @Date 2022-07-11
 */
import { useState } from 'react'
const StateDemo = () => {
  const [count, setCount] = useState(0)
  console.log('render state')
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((state) => ++state)
        }}
      >
        click add
      </button>
    </>
  )
}
export default StateDemo
