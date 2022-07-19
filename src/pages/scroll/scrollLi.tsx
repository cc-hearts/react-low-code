import { useRef, useState, useEffect, useCallback } from 'react'

interface Props {
  totalWidth: number
  isScrollable: boolean
  speed: number
  isStopScroll: boolean
  title: string
  callback: (...args: any[]) => unknown
}

const ScrollLi: React.FC<Props> = (props: Props) => {
  const liRef = useRef<HTMLLIElement>(null)
  const isScrolling = useRef<boolean>(false)
  const animationTimer = useRef<number>(-1)
  /** 存储左边的边界位置 */
  const [leftBoundary, setLeftBoundary] = useState(0)
  const [style, setStyle] = useState({
    transform: `translateX(${props.totalWidth}px) translateZ(0)`,
    opacity: '0',
  })
  /** 计算需要滚动的位置宽度 */
  useEffect(() => {
    if (liRef.current && !props.isScrollable) {
      // 计算初始值
      setStyle((state) =>
        Object.assign({}, state, {
          transform: `translateX(${props.totalWidth - liRef.current!.offsetLeft}px) translateZ(0)`,
        })
      )
    }
  }, [props.isScrollable, props.totalWidth])
  useEffect(() => {
    if (liRef.current) {
      setLeftBoundary(-1 * (liRef.current.offsetWidth + liRef.current.offsetLeft))
    }
  }, [])
  const animationScroll = useCallback(
    function animationFunc() {
      isScrolling.current = true
      const speed = props.speed
      const dom = liRef.current
      const totalWidth = props.totalWidth
      const callback = props.callback
      const reg = /X\(\s*(-?\d*(\.*\d*)?)px/
      if (dom && reg.test(dom.style.transform)) {
        const leftSpace = Number(RegExp.$1) - speed
        if (leftSpace < leftBoundary) {
          isScrolling.current = false
          callback()
          dom.style.transform = `translateX(${totalWidth - dom.offsetLeft}px) translateZ(0)`
          return
        }
        dom.style.transform = `translateX(${leftSpace}px) translateZ(0)`
        animationTimer.current = requestAnimationFrame(() => {
          animationFunc()
        })
      }
    },
    [leftBoundary, props.callback, props.speed, props.totalWidth]
  )
  useEffect(() => {
    setStyle((state) => {
      return Object.assign({}, state, {
        opacity: props.isScrollable ? '1' : '0',
      })
    })
  }, [props.isScrollable])
  /** animationScroll改变之后 立马执行新的callback */
  useEffect(() => {
    if (props.isScrollable) {
      cancelAnimationFrame(animationTimer.current)
      !props.isStopScroll &&
        (animationTimer.current = requestAnimationFrame(() => {
          animationScroll()
        }))
    }
  }, [animationScroll, props.isScrollable, props.isStopScroll])

  return (
    <>
      <li ref={liRef} className='flex-1' style={style}>
        {props.title || ''}
      </li>
    </>
  )
}

export default ScrollLi
