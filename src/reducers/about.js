import { TOGGLE_ABOUT } from 'actionTypes'
const initialState = true

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case TOGGLE_ABOUT:
      return !state
    default:
      return state
  }
}
