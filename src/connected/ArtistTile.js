import ArtistTile from '../components/ArtistTile'
import { connect } from 'react-redux'
import { setArtistInfo } from 'actions/playback'

export default connect(state => {
  return {
    selectedArtist: state.playback.artist
  }
}, { setArtistInfo })(ArtistTile)
