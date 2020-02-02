import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import * as serviceWorker from './serviceWorker'
import "normalize.css"
import "bulma"


import router from "./router"

ReactDOM.render(
  router,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
