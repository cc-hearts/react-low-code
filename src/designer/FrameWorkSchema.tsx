import type { RenderSchema } from '@/types'
import { Form } from 'antd'
interface IProps {
  schema: RenderSchema[]
}

function FrameWorkSchema({ schema }: IProps) {
  return (
    <Form>
      {schema.map((val) => {
        const Component = val.Component
        return (
          <Form.Item key={val.uuid} label={val.attribute?.label}>
            <Component {...val.attribute} />
          </Form.Item>
        )
      })}
    </Form>
  )
}

export default FrameWorkSchema
