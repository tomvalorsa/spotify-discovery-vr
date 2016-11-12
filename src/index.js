import React from 'react'
import { render } from 'react-dom'
import getRoot from 'get-root'

import { RedirectUri } from 'constants'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import App from './connected/App'
import SpotifyAuth from './components/SpotifyAuth'
import PreAuth from './components/PreAuth'

import 'aframe'
import 'aframe-text-component'
import 'aframe-animation-component'

import './index.css'

let store = applyMiddleware(thunk)(createStore)(rootReducer)

render(
  <Provider store={store}>
    <SpotifyAuth
      preAuth={PreAuth}
      redirectURI={RedirectUri}
      clientID={process.env.CLIENT_ID}
      scope={['user-top-read']}
    >
      <App />
    </SpotifyAuth>
  </Provider>,
  getRoot()
)
