import React from 'react'
import Popup from './Popup.js'

export default class Home extends React.Component{

  handleClick (event) {
    console.log("you click")
  }

  render() {
    return (
      <div>
        <div className="title-container">
          <h1>Title goes here!</h1>
          <h2>Description goes here</h2>
        </div>

        <div className="body-container" >
          <img src="./resources/images/body.svg" className="stretch" alt="image" width="300px" />
          <div className="upper-body-div" onClick={this.handleClick.bind(this)}></div>
          <div className="mid-body-div" onClick={this.handleClick.bind(this)}></div>
          <div className="lower-body-div"  onClick={this.handleClick.bind(this)}></div>
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
