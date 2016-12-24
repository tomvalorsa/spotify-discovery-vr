import { combineReducers } from 'redux'

import about from './about'
import artists from './artists'
import playback from './playback'
import playlist from './playlist'

export default combineReducers({
  about,
  artists,
  playback,
  playlist
})
