interface IProps {
  component?: React.FC<any>
}
const ControlIcons: React.FC<IProps> = ({ component }) => {
  if (component) {
    const Component = component
    return <Component width="2em" height="2em" />
  }
  return null
}

export default ControlIcons
