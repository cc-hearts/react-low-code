import { useReducer } from 'react'

interface reducer {
  type: 'increased' | 'decreased'
}

const reducer = (state: number, action: reducer) => {
  switch (action.type) {
    case 'increased': {
      return state + 1
    }
    case 'decreased': {
      return state - 1
    }
    default: {
      throw new Error(`Invalid action`)
    }
  }
}

const initStateFunc = (count: number) => {
  if (count === 0) {
    return 99
  } else {
    return count
  }
}

const Reducer = () => {
  // 惰性初始化
  const [state, dispatch] = useReducer(reducer, 0, initStateFunc)
  return (
    <>
      {state}
      <button
        onClick={() => {
          dispatch({ type: 'increased' })
        }}
      >
        increased
      </button>
      <button onClick={() => dispatch({ type: 'decreased' })}>decreased</button>
    </>
  )
}

export default Reducer
