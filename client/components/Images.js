import React from 'react'

export default class Image extends React.Component {
  render () {
    return (
      <img className="exercise-image" src={this.props.imageUrl} />
    )
  }
}
