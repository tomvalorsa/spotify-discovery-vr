import React, { Component, Children, PropTypes } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import randomstring from 'randomstring'

// TODO:
  // - add a logout function of some sort??
  // - find out how to test if token is valid
    // - making a quick request and listening for error could be a dirty way to do it

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
    // look in localStorage
    let localToken = localStorage.getItem('spotify_token')
    if (localToken) {
      this.createClient()
    }

    // look in url
    if (window.location.hash) {
      this.getTokenFromURL()
    }
  }
  getTokenFromURL() {
    let match = window.location.hash.match(/access_token=([^&]*)/)
    window.location.hash = ''
    localStorage.removeItem('spotify_state')

    if (match) {
      localStorage.setItem('spotify_token', match[1])
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
    let {
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

    // component from props to display before user begins auth process
    return <this.props.preAuth redirectToAuth={this.authenticateUser} />
  }
}
