import React from 'react'
import Instructions from './Instructions'
import Image from './Images'
import Modal from 'react-modal'

export default class Home extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      title: '',
      instructions: [],
      imageUrls: []
    }
  }
  handleClick = (event) => {
    console.log("you clicked", event.target)
    console.log('classname', event.target.className)
    // the event tells us which body part to look for
    const prefix = event.target.className.match(/\w+/)[0]
    const bodyPart = prefix + 'BodyExercises'
    // props.data contains all the exercies for every body part
    // single out the body part in props
    const manyExercises = this.props.data[bodyPart]
    // update the state with an exercise from that
    this.setState(manyExercises[0])
    this.openModal()
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="container">
        <div className="title-container">
          <h1>! HURT WORLD</h1>
          <h2>Get rid of tension with a bit of exercise</h2>
        </div>

        <div className="body-container">
          <img src="./resources/images/body.svg" className="stretch" alt="image" width="300px" />
          <div className="upper-body-div" onClick={this.handleClick.bind(this)}></div>
          <div className="mid-body-div" onClick={this.handleClick.bind(this)}></div>
          <div className="lower-body-div"  onClick={this.handleClick.bind(this)}></div>
        </div>
        <div className="disclaimer-container">
          <h5 className="disclaimer">Disclaimer</h5>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={150}
        >
        <button className='close' onClick={this.closeModal}>[x]</button>
          <h2>{this.state.title}</h2>

          <Instructions instructions={this.state.instructions} />
          <Image imageUrl={this.state.imageUrls[0]} />
        </Modal>

      </div>
      )
  }
}
