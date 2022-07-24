/**
 * @author heart
 * @description 两球loading动画
 * @Date 2022-07-24
 */

import React from 'react'
import './twoBalls.less'
const loading = () => {
  return (
    <>
      <div className='mask-wrapper'>
        <div className='red-ball'></div>
        <div className='blue-ball'></div>
      </div>
    </>
  )
}

export default loading
