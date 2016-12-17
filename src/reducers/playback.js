import {
  SET_ARTIST_INFO,
  TOGGLE_PAUSED,
  SKIP_NEXT,
  SKIP_PREVIOUS
} from 'actionTypes'

const initialState = {
  artist: null,
  track: null,
  top10: [],
  paused: true
}

export default function(state = initialState, { type, payload }) {
  let currentIdx = state.track && state.top10.indexOf(state.track)

  switch(type) {
    case SET_ARTIST_INFO:
      let { artist, top10 } = payload

      return {
        ...state,
        artist,
        top10,
        track: top10[0],
        paused: true
      }
    case TOGGLE_PAUSED:
      return {
        ...state,
        paused: !state.paused
      }
    case SKIP_NEXT:
      if (!state.artist) return state

      let nextIdx = (currentIdx + 1) % 10

      return {
        ...state,
        track: state.top10[nextIdx],
        paused: false
      }
    case SKIP_PREVIOUS:
      if (!state.artist) return state

      let prevIdx = currentIdx - 1 < 0 ? 10 : currentIdx - 1

      return {
        ...state,
        track: state.top10[prevIdx],
        paused: false
      }
    default:
      return state
  }
}
