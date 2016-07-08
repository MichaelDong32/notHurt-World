import React from 'react'
import Popup from './Popup.js'

export default class Home extends React.Component{
  constructor () {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  getInitialState () {
    return { modalIsOpen: false };
  }

  openModal () {
    this.setState({modalIsOpen: true});
  }

  closeModal () {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div className="title-container">
          <h1>Title goes here!</h1>
          <h2>Description goes here</h2>
        </div>
        <div className="body-container">
          <img src="./resources/images/body.svg" width="300px"/>
          <div className="upper-body-div"></div>
          <div className="mid-body-div"></div>
          <div className="lower-body-div"></div>
        </div>
        <div className="disclaimer-container">
          <h5>Disclaimer</h5>
        </div>
        <button type="button" onClick={this.openModal} >Click Me</button>
        <Popup  />
      </div>
      )
  }
}
