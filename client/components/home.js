import React from 'react'
import Popup from './Popup.js'
export default class Home extends React.Component{
  handleClick (event) {
    console.log("you click")
  }
  render() {
    return (
      <div className="container">
        <div className="title-container">
          <h1>moveMe</h1>
          <h2>Get rid of tension with a bit of exercise</h2>
        </div>
        <div className="stretch">
          <img src="./resources/images/body.svg" alt="image"/>
        </div>

        <div className="body-container" >
          <div className="upper-body-div" onClick={this.handleClick.bind(this)}></div>
          <div className="mid-body-div" onClick={this.handleClick.bind(this)}></div>
          <div className="lower-body-div"  onClick={this.handleClick.bind(this)}></div>
        </div>
      </div>
      )
  }
}
