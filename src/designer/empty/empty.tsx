import {LeftEmpty} from "./leftEmpty"
import { RightEmpty } from './rightEmpty'
function EmptyDesigner() {
  return <div className="w-full h-full flex items-center justify-center">
  <LeftEmpty />
  <RightEmpty />
  </div>
}

export default EmptyDesigner