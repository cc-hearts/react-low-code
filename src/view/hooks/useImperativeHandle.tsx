import React, { useRef, useState, useImperativeHandle, useEffect } from 'react'

interface inter {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Child = React.forwardRef<inter>((props, ref) => {
  const [value, setValue] = useState('1')

  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle<inter, inter>(ref, () => ({
    setValue,
    value,
    input: inputRef.current,
  }))

  return <input value={value} ref={inputRef} readOnly />
})

export default () => {
  const ref = useRef<inter>(null)

  useEffect(() => {
    console.log(ref.current)
  })
  return <Child ref={ref} />
}
