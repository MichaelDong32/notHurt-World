import React from 'react'
import Instructions from './Instructions'
import Images from './Images'
import Modal from 'react-modal'

export default class Popup extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render () {
    return (
      <Modal
      <p>Title: {this.props.title}</p>
        isOpen={this.state.modalOpen}
        onRequestClose={this.toggleModal}
        closeTimeoutMS={150}
      >
      <button className='close' onClick={this.toggleModal}>[x]</button>
        <h1>Modal Content</h1>
        <h3>Stretch for: {this.props.title}</h3>
        <Instructions instructions={this.props.instructions} />
      </Modal>
    )
  }
}

