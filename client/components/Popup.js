import React from 'react'
import Instructions from './Instructions'
import Images from './Images'

export default class Popup extends React.Component {
  render {
    return (
      <div>
        {this.props.title}
        <Instructions value={this.props.instructions} />
        <Images value={this.props.imageUrls}/>
      </div>
    )
  }
}

