import Less from './index.module.less'
const Loading = function () {
  return (
    <>
      <div className={Less['loading-main']}>
        <div className={Less['mask-loading']}></div>
        <div className={Less['mask-loading']}></div>
        <div className={Less['mask-change']}></div>
        <div className={Less['mask-change']}></div>
      </div>
    </>
  )
}
export default Loading
