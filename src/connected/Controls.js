import Control from '../components/Control'
import _RelatedArtists from '../components/RelatedArtists'
import { connect } from 'react-redux'
import { Icons } from 'constants'
import { setArtists } from 'actions/artists'
import { setPlaylistEntry } from 'actions/playlist'
import {
  togglePaused,
  setArtistInfo,
  skipNext,
  skipPrevious
} from 'actions/playback'

export const PlayPause = connect((state, props) => {
  const { artist } = props
  const { playback } = state

  let img = Icons.play

  if (!playback.paused && artist.id === playback.artist) {
    img = Icons.pause
  }

  return { img }
}, { click: togglePaused })(Control)


export const Previous = connect(state => {
  return {
    img: Icons.previous
  }
}, { click: skipPrevious })(Control)


export const Next = connect(state => {
  return {
    img: Icons.next
  }
}, { click: skipNext })(Control)


export const RelatedArtists = connect(state => {
  return {
    img: Icons.relatedArtists
  }
}, { setArtists, togglePaused })(_RelatedArtists)

export const AddToPlaylist = connect(state => {
  const { playlist, playback } = state
  const added = playlist.indexOf(playback.track.uri) > -1

  return {
    img: added ? Icons.added : Icons.add
  }
}, { click: setPlaylistEntry })(Control)
