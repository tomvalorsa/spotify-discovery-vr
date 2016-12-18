import { combineReducers } from 'redux'

import app from './app'
import artists from './artists'
import playback from './playback'
import playlist from './playlist'

export default combineReducers({
  app,
  artists,
  playback,
  playlist
})
