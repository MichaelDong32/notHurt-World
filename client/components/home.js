import React from 'react'

export default class Home extends React.Component{
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
        <button type="button">Click Me</button>
      </div>
      )
  }
}
