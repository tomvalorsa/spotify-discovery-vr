import React, { Component, Children, PropTypes } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import randomstring from 'randomstring'

// TODO:
  // - add a logout function of some sort
  // - force user to see preAuth component each time so they have to do login (it will be automatic if token is still valid...I think, otherwise they'll see login prompt)

export default class SpotifyAuth extends Component {
  static childContextTypes = {
    SpotifyApi: PropTypes.object
  }
  state =  {
    authed: false,
    client: undefined
  }
  getChildContext() {
    return {
      SpotifyApi: this.state.client
    }
  }
  componentDidMount() {
    this.checkIfAuthed()
  }
  checkIfAuthed() {
    // TODO: add this back in once there is a way to check if local token is valid.
    // Or do we even want to do this? Do we want user to see preAuth every time they hit the site?

    // Look in localStorage for a valid token
    // let localToken = localStorage.getItem('spotify_token')
    // let tokenIsValid = +localStorage.getItem('spotify_token_expiry') > Date.now()
    // if (localToken && tokenIsValid) {
    //   this.createClient()
    // }

    // Look in url for token
    if (window.location.hash) {
      this.getTokenFromURL()
    }
  }
  getTokenFromURL() {
    let params = {}
    window.location.hash
      .slice(1)
      .split('&')
      .forEach(pair => {
        let [ key, value ] = pair.split('=')
        params[key] = value
      })

    const stateIsValid = params.state === localStorage.getItem('spotify_state')

    // Don't need these anymore
    window.location.hash = ''
    localStorage.removeItem('spotify_state')

    if (params.access_token && stateIsValid) {
      const expiry = Date.now() + (+params.expires_in * 1000)

      localStorage.setItem('spotify_token', params.access_token)
      localStorage.setItem('spotify_token_expiry', expiry)
      this.createClient()
    }
  }
  createClient() {
    let localToken = localStorage.getItem('spotify_token')
    let SpotifyApi = new SpotifyWebApi()
    SpotifyApi.setAccessToken(localToken)

    this.setState({authed: true, client: SpotifyApi})
  }
  authenticateUser = () => {
    const {
      clientID,
      redirectURI,
      scope,
      responseType = 'token',
      state = randomstring.generate()
    } = this.props

    // Hold onto this to verify incoming token
    localStorage.setItem('spotify_state', state)

    let path = 'https://accounts.spotify.com/authorize?'
      + `client_id=${clientID}&`
      + `redirect_uri=${redirectURI}&`
      + `scope=${scope}&`
      + `response_type=${responseType}&`
      + `state=${state}`

    window.location = path
  }
  render() {
    let { authed, client } = this.state

    if (authed && client !== undefined) {
      return Children.only(this.props.children)
    }

    // Component from props to display before user begins auth process
    return <this.props.preAuth redirectToAuth={this.authenticateUser} />
  }
}
