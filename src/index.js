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

import AFRAME from 'aframe'
import 'aframe-text-component'
import 'aframe-animation-component'

import draw from 'aframe-draw-component'
import textwrap from 'aframe-textwrap-component'

// Not working properly? Is being appended to list of components, just not showing...
AFRAME.registerComponent('draw', draw.component)
AFRAME.registerComponent('textwrap', textwrap.component)

import './index.css'

let store = applyMiddleware(thunk)(createStore)(rootReducer)

render(
  <Provider store={store}>
    <SpotifyAuth
      preAuth={PreAuth}
      redirectURI={RedirectUri}
      clientID={process.env.CLIENT_ID}
      scope={['user-top-read', 'playlist-modify-public']}
    >
      <App />
    </SpotifyAuth>
  </Provider>,
  getRoot()
)
