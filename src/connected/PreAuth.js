import PreAuth from '../components/PreAuth'
import { connect } from 'react-redux'
import { toggleAbout } from 'actions/about'

export default connect(state => {
  return {
    aboutVisible: state.about
  }
}, { toggleAbout })(PreAuth)
