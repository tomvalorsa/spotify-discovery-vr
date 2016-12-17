import Control from '../components/Control'
import { connect } from 'react-redux'
import { ControlIcons } from 'constants'
// setPlayPause
// skipPrevious
// skipNext
// selectRelatedArtists
// addToPlaylist

export const PlayPause = connect(state => {
  // or similar for state, need to work out
  // state.paused ? ControlIcons.pause : ControlIcons.play
  return {
    img: ControlIcons.play
  }
})(Control)


export const Previous = connect(state => {
  return {
    img: ControlIcons.previous
  }
})(Control)


export const Next = connect(state => {
  return {
    img: ControlIcons.next
  }
})(Control)


export const RelatedArtists = connect(state => {
  return {
    img: ControlIcons.relatedArtists
  }
})(Control)


export const AddToPlaylist = connect(state => {
  // let added
  // added ? ControlIcons.added : ControlIcons.add

  return {
    img: ControlIcons.add
  }
})(Control)
