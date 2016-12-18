import Artist from '../components/Artist'
import { connect } from 'react-redux'

export default connect(state => {
  return {
    selectedArtist: state.playback.artist
  }
})(Artist)
