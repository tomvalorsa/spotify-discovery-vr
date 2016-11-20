import React, { Component, Children, PropTypes } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import randomstring from 'randomstring'

// TODO:
  // - think about how this would work without a preauth component as well

export default class SpotifyAuth extends Component {
  static childContextTypes = {
    SpotifyApi: PropTypes.object,
    clearUserInfo: PropTypes.func
  }
  state =  {
    authed: false,
    client: undefined
  }
  getChildContext() {
    return {
      SpotifyApi: this.state.client,
      clearUserInfo: this.clearUserInfo
    }
  }
  componentDidMount() {
    this.checkIfAuthed()
  }
  checkIfAuthed() {
    // N.B. currently we want the user to see the preAuth component every time
    // we can extend this in future to allow for pass through if we want them to be able to skip it if they have a valid token

    // Look in localStorage for a valid token
    let validLocalToken = this.getTokenFromLocalStorage()
    if (validLocalToken) {
      this.createClient()
    }

    // Look in url for token
    if (window.location.hash) {
      this.getTokenFromURL()
    }
  }
  getTokenFromLocalStorage() {
    let localToken = localStorage.getItem('spotify_token')
    let tokenIsValid = +localStorage.getItem('spotify_token_expiry') > Date.now()
    return localToken && tokenIsValid
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

    // Check for valid local token before making user auth request
    let validLocalToken = this.getTokenFromLocalStorage()
    if (validLocalToken) {
       return this.createClient()
    }

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
  clearUserInfo = () => {
    localStorage.removeItem('spotify_token')
    localStorage.removeItem('spotify_token_expiry')
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
