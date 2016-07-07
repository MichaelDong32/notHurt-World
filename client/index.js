/* Entry point for the app */
console.log('hi');
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'

import domready from 'domready'

domready( () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  )
})
