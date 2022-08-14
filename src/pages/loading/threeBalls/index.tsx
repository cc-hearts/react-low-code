import Less from './index.module.less'
export default () => {
  return (
    <>
      <div className={Less['loading-wrapper']}>
        <div>
          <span className={Less['load-ball']}></span>
          <span className={Less['load-ball']}></span>
          <span className={Less['load-ball']}></span>
          <span className={Less['load-shadow']}></span>
          <span className={Less['load-shadow']}></span>
          <span className={Less['load-shadow']}></span>
        </div>
      </div>
    </>
  )
}
