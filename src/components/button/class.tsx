import React from 'react'
import PropTypes from 'prop-types'
interface Props {
  text?: string
}
export default class Button extends React.Component<Props> {
  static propTypes: Record<string, any>
  handleClick = () => {
    console.log(this)
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.props.text || ''}</button>
      </>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
}
