import React from 'react'
import Instructions from './Instructions'
import Images from './Images'
import Modal from 'react-modal'

export default class Popup extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      modalOpen: true
    }
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render () {
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.toggleModal}
          closeTimeoutMS={150}
        >
        <button className='close' onClick={this.toggleModal}>[x]</button>
          <h1>Modal Content</h1>
          <h3>Stretch for: {this.props.title}</h3>
          <Instructions instructions={this.props.instructions} />
        </Modal>
      </div>
    )
  }
}

