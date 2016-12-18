import { SET_PLAYLIST_ENTRY } from 'actionTypes'

export const setPlaylistEntry = () => (dispatch, getState) => {
  const { track } = getState().playback

  dispatch({
    type: SET_PLAYLIST_ENTRY,
    payload: track.uri
  })
}
