import Control from '../components/Control'
import { connect } from 'react-redux'
import { ControlIcons } from 'constants'
import {
  togglePaused,
  setArtistInfo,
  skipNext,
  skipPrevious
} from 'actions/playback'

export const PlayPause = connect((state, props) => {
  return {
    img: state.playback.paused ? ControlIcons.play : ControlIcons.pause,
    selectedArtist: state.playback.artist
  }
}, { togglePaused, setArtistInfo })(Control)


export const Previous = connect(state => {
  return {
    img: ControlIcons.previous
  }
}, { click: skipPrevious })(Control)


export const Next = connect(state => {
  return {
    img: ControlIcons.next
  }
}, { click: skipNext })(Control)


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
