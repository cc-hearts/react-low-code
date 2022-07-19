import Scroll from './scroll'

export default () => {
  const stringArray = [' test demo']
  return (
    <>
      <Scroll speed={0.6} listImg={stringArray} />
    </>
  )
}
