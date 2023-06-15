import { Button as AntdButton } from "antd"
function Button({props = {}}: any) {
  const { text } = props
  return <AntdButton>
    { text }
  </AntdButton>
}

export default Button
