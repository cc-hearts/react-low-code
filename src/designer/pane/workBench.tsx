import Header from "@/layouts/Header"
import ControlPane from "./control/controlPane"
import ViewPane from "./view/viewPane"
import AttributePane from "./attribute/attributePane"
function WorkBench() {
  return <div className="flex w-full h-full flex-col">
    {/* Header */}
    <Header />
    {/* Container */}
    <div className="flex-1 flex w-full">
      <ControlPane />
      <ViewPane />
      <AttributePane />
    </div>
  </div>
}

export default WorkBench