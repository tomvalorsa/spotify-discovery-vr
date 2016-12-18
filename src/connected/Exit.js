import Exit from '../components/Exit'
import { connect } from 'react-redux'

export default connect(state => {
  return {
    playlist: state.playlist
  }
})(Exit)
