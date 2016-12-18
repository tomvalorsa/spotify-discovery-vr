import Control from '../components/Control'
import _PlayPause from '../components/PlayPause'
import { connect } from 'react-redux'
import { ControlIcons } from 'constants'
import {
  togglePaused,
  setArtistInfo,
  skipNext,
  skipPrevious
} from 'actions/playback'

export const PlayPause = connect(state => {
  return {
    img: state.playback.paused ? ControlIcons.play : ControlIcons.pause,
    selectedArtist: state.playback.artist
  }
}, { togglePaused, setArtistInfo })(_PlayPause)


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
}, { click: () => console.log('clicked') })(Control)


export const AddToPlaylist = connect(state => {
  // let added
  // added ? ControlIcons.added : ControlIcons.add

  return {
    img: ControlIcons.add
  }
}, { click: () => console.log('clicked') })(Control)
