import { SET_TRACK, CLEAR_TRACK } from 'actionTypes'

const initialState = null

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_TRACK:
      return state === payload ? null : payload
    case CLEAR_TRACK:
      return null
    default:
      return state
  }
}
