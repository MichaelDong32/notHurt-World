import React from 'react'

export default class Popup extends React.Component {
  render () {
    return (
      <div>
        {this.props.instructions.map( (instruction, index) => {
            return <p key={index}>{index + 1}. {instruction}</p>
          })}
      </div>
    )
  }
}
