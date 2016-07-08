/* Entry point for the app */
console.log('hi');
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home'

import 'whatwg-fetch'
import 'es6-promise'
import domready from 'domready'

let data = {}

fetch('/data.json')
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    data = res
    ReactDOM.render(
      <Home data={data}/>,
      document.querySelector('#app')
    )
  })

domready( () => {
  ReactDOM.render(
    <Home data={data}/>,
    document.querySelector('#app')
  )
})
