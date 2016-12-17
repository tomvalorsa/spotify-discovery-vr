import { combineReducers } from 'redux'

import app from './app'
import track from './track'
import artists from './artists'
import playback from './playback'

export default combineReducers({
  app,
  track,
  artists,
  playback
})
