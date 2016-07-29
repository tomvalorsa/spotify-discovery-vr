import App from '../components/App'
import { connect } from 'react-redux'

export default connect(state => ({test: state.app}))(App)