import React from 'react'
import Popup from './Popup.js'
import Instructions from './Instructions'
import Images from './Images'

export default class Home extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false
      title: '',
      instructions: [],
      imageUrls: []
    }
  }
  handleClick = (event) => {
    console.log("you clicked", event.target)
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
          <h1>Title goes here!</h1>
          <h2>Description goes here</h2>
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
          {this.state.instructions.map( (instruction, index) => {
            return <p key={index}>{index + 1}. {instruction}</p>
          })}
          <Instructions instructions={this.state.instructions} />
        </Modal>

      </div>
      )
  }
}
