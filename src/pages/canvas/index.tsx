import styles from './index.module.less'
import { useCallback, useEffect, useRef } from 'react'

export default function CanvasDemo() {
  const canvas = useRef<HTMLCanvasElement>(null)

  const ctx = useRef<CanvasRenderingContext2D | null>(null)

  const isMouseUp = useRef<boolean>(false)

  const drawCanvas = useCallback(
    (x?: number, y?: number) => {
      if (ctx.current) {
        ctx.current.restore()
        if (x && y) {
          ctx.current.lineTo(x, y)
          ctx.current.stroke()
        }
      }
    },
    [ctx]
  )
  // 鼠标移动事件
  const mouseMoving = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      const x: number = e.offsetX
      const y: number = e.offsetY
      drawCanvas(x, y)
    },
    [drawCanvas]
  )
  // 判断是否移出了canvas之外了
  const bodyMouseMoving = useCallback(() => {
    if (isMouseUp) {
      isMouseUp.current = false
      ctx.current?.save()
      if (canvas.current) canvas.current.removeEventListener('mousemove', mouseMoving, false)
    }
  }, [canvas, mouseMoving])

  // 鼠标松开事件
  const handleMouseUp = useCallback(() => {
    isMouseUp.current = false
    ctx.current?.save()
    if (canvas.current) canvas.current.removeEventListener('mousemove', mouseMoving, false)
  }, [canvas, mouseMoving])

  // 鼠标按下事件
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      const { offsetX, offsetY } = event.nativeEvent
      isMouseUp.current = true
      ctx.current?.restore()
      ctx.current?.beginPath()
      ctx.current?.moveTo(offsetX, offsetY)
      if (canvas.current) canvas.current.addEventListener('mousemove', mouseMoving, false)
    },
    [canvas, mouseMoving]
  )

  useEffect(() => {
    document.body.addEventListener('mousemove', bodyMouseMoving, false)
    return () => {
      document.body.removeEventListener('mousemove', bodyMouseMoving, false)
    }
  }, [bodyMouseMoving])

  useEffect(() => {
    // 获取canvas元素的值
    if (canvas.current) {
      const width: number = 900 || document.body.offsetWidth
      const height: number = 450 || document.body.offsetHeight
      canvas.current.width = width
      canvas.current.height = height
      ctx.current = canvas.current.getContext('2d')
    }
  }, [])
  return (
    <div className={styles['online-draw']}>
      <canvas ref={canvas} onMouseDown={handleClick} onMouseUp={handleMouseUp}></canvas>
    </div>
  )
}
