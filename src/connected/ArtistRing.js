import ArtistRing from '../components/ArtistRing'
import { connect } from 'react-redux'
import { setArtists } from 'actions/artists'

export default connect(state => {
  return {
    artists: state.artists
  }
}, {setArtists})(ArtistRing)
