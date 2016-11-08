import React, { Component, Children } from 'react'
import styles from './index.css'
import { RedirectUri } from 'constants'

// base this off the auth0 component
// pass down initialised api client/user token through context

// ok for testing, but currently means that user will have to get token every time (unless we can find some way around this/add a small backend?)

export default class SpotifyAuth extends Component {
  state =  {
    token: ''
  }
  componentDidMount() {
    if (window.location.hash) {
      let match = window.location.hash.match(/access_token=([^&]*)/)

      if (match) {
        this.setState({token: match[1]})
      }
    }
  }
  authenticateUser = () => {
    let path = 'https://accounts.spotify.com/authorize?'
    path += `client_id=${process.env.CLIENT_ID}&`
    path += `redirect_uri=${RedirectUri}&`
    path += 'scope=user-top-read&'
    path += 'response_type=token'
    // add state value to path here too! more secure
    // https://developer.spotify.com/web-api/authorization-guide/#implicit-grant-flow

    window.location = path
  }
  render() {
    let { token } = this.state

    if (token) {
      return Children.only(this.props.children)
    }

    return (
      <div className={styles.authContainer}>
        <button onClick={this.authenticateUser}>Auth me</button>
      </div>
    )
  }
}
