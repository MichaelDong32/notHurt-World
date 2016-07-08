/* Entry point for the app */
console.log('hi');
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'
import Popup from './components/Popup.js'

import domready from 'domready'

domready( () => {
  ReactDOM.render(
    <Popup title="the popup title" />,
    document.querySelector('#app')
  )
})
