import { TOGGLE_ABOUT } from 'actionTypes'
const initialState = false

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case TOGGLE_ABOUT:
      return !state
    default:
      return state
  }
}
