import Music from '../components/Music'
import { connect } from 'react-redux'

export default connect(state => {
  return {
    track: state.playback.track,
    paused: state.playback.paused
  }
})(Music)
