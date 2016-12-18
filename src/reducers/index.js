import { combineReducers } from 'redux'

import app from './app'
import artists from './artists'
import playback from './playback'

export default combineReducers({
  app,
  artists,
  playback
})
