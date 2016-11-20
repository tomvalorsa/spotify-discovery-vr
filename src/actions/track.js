import { SET_TRACK, CLEAR_TRACK } from 'actionTypes'

export const setTrack = (track) => ({
  type: SET_TRACK,
  payload: track
})

export const clearTrack = () => ({
  type: CLEAR_TRACK
})
