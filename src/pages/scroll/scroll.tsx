/**
 * @author heart
 * @description 图片文字滚动
 */
import React, { useEffect, useRef, useState, useCallback } from 'react'
import ScrollLi from './scrollLi'
import './main.css'

interface Props {
  listImg: string[] | []
  speed: number
}

const ScrollComponent: React.FC<Props> = function (props) {
  const refContainer = useRef<HTMLUListElement>(null)

  const [scrollIndex, setScrollIndex] = useState(0)

  const [ulTotalWidth, setUlTotalWidth] = useState(0)

  const [isStopScroll, setStopScroll] = useState(false)

  const { listImg = [] } = props

  useEffect(() => {
    // 计算出总宽度
    if (refContainer.current) {
      setUlTotalWidth(() => refContainer.current!.offsetWidth)
    }
  }, [props.listImg.length])

  const setScrollIndexCallback = useCallback(() => {
    setScrollIndex((state) => {
      state++
      if (state >= props.listImg.length) {
        state = 0
      }
      return state
    })
  }, [props.listImg.length])

  useEffect(() => {
    const resize = () => {
      if (refContainer.current) setUlTotalWidth(() => refContainer.current!.offsetWidth)
    }

    window.addEventListener('resize', resize, false)

    return () => {
      window.removeEventListener('resize', resize, false)
    }
  }, [])

  const mouseEnterCallback = useCallback(() => {
    setStopScroll(true)
  }, [])

  const mouseLeaveCallback = useCallback(() => {
    setStopScroll(false)
  }, [])

  return (
    <>
      <ul
        className='flex  overflow-hidden position-relative text-align-center width-full flex-no-warp height-full'
        ref={refContainer}
        onMouseEnter={mouseEnterCallback}
        onMouseLeave={mouseLeaveCallback}
      >
        {ulTotalWidth &&
          listImg.map((x, index) => {
            return (
              <ScrollLi
                key={index}
                isScrollable={scrollIndex === index}
                totalWidth={ulTotalWidth}
                title={x}
                isStopScroll={isStopScroll}
                speed={props.speed}
                callback={setScrollIndexCallback}
              />
            )
          })}
      </ul>
    </>
  )
}

export default ScrollComponent
