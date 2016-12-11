import { combineReducers } from 'redux'

import app from './app'
import track from './track'
import artists from './artists'

export default combineReducers({
  app,
  track,
  artists
})
