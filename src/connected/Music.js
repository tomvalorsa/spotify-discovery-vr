import Music from '../components/Music'
import { connect } from 'react-redux'

export default connect(state => {
  return {
    track: state.track
  }
}, {})(Music)
