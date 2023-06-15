import type { RenderSchema } from "@/types"

interface IProps {
  schema: RenderSchema[]
}

 function FrameWorkSchema({schema}:IProps) {
  return schema.map(val => {
    const Component = val.Component
    return <Component key={val.uuid} {...val.attribute} />
  })
}

export default FrameWorkSchema