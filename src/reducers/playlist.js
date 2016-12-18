import { SET_PLAYLIST_ENTRY } from 'actionTypes'

const initialState = []

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_PLAYLIST_ENTRY:
      let idx = state.indexOf(payload)

      // Add
      if (idx === -1) {
        return [...state, payload]
      }

      // Remove
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    default:
      return state
  }
}
