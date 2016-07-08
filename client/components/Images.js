import React from 'react'

export default class Popup extends React.Component {
  render () {
    return (
      <div>
        This is the popup box
        {this.props.images}
      </div>
    )
  }
}
