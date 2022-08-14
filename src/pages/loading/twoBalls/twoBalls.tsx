/**
 * @author heart
 * @description 两球loading动画
 * @Date 2022-07-24
 */

import Less from './twoBalls.module.less'
const loading = () => {
  return (
    <>
      <div className={Less['loading-wrapper']}>
        <div className={Less['loading']}>
          <div className={Less['red-ball']}></div>
          <div className={Less['blue-ball']}></div>
          <div className={Less['mask-wrapper']}></div>
        </div>
      </div>
    </>
  )
}

export default loading
