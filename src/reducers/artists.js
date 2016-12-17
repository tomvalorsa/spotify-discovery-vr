import { SET_ARTISTS } from 'actionTypes'

const initialState = []

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_ARTISTS:
      return payload
    default:
      return state
  }
}
