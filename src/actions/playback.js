import {
  SET_ARTIST_INFO,
  TOGGLE_PAUSED,
  SKIP_NEXT,
  SKIP_PREVIOUS
} from 'actionTypes'

export const setArtistInfo = (artist, topTracks) => ({
  type: SET_ARTIST_INFO,
  payload: { artist, topTracks }
})

export const togglePaused = () => ({
  type: TOGGLE_PAUSED
})

export const skipNext = () => ({
  type: SKIP_NEXT
})

export const skipPrevious = () => ({
  type: SKIP_PREVIOUS
})
