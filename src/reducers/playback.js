import {
  SET_ARTIST_INFO,
  TOGGLE_PAUSED,
  SKIP_NEXT,
  SKIP_PREVIOUS
} from 'actionTypes'

const initialState = {
  artist: null,
  track: null,
  topTracks: [],
  paused: true
}

export default function(state = initialState, { type, payload }) {
  let currentIdx = state.track && state.topTracks.indexOf(state.track)

  switch(type) {
    case SET_ARTIST_INFO:
      let { artist, topTracks } = payload

      return {
        ...state,
        artist,
        topTracks,
        track: topTracks[0],
        paused: false
      }
    case TOGGLE_PAUSED:
      return {
        ...state,
        paused: !state.paused
      }
    case SKIP_NEXT:
      if (!state.artist) return state

      let nextIdx = (currentIdx + 1) % state.topTracks.length

      return {
        ...state,
        track: state.topTracks[nextIdx],
        paused: false
      }
    case SKIP_PREVIOUS:
      if (!state.artist) return state

      let prevIdx = currentIdx - 1 < 0 ? state.topTracks.length - 1 : currentIdx - 1

      return {
        ...state,
        track: state.topTracks[prevIdx],
        paused: false
      }
    default:
      return state
  }
}
