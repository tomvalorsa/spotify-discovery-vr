import Tile from '../components/Tile'
import { connect } from 'react-redux'
import { setTrack, clearTrack } from 'actions/track'

export default connect(state => {
  return {}
}, {setTrack, clearTrack})(Tile)
