import React, { Component, PropTypes } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'
import _ from 'lodash'
import { setArtists } from 'actions/artists'

import { Scene, Entity } from 'aframe-react'

import Sky from '../components/Sky'
import Roof from '../components/Roof'
import Floor from '../components/Floor'
import Cursor from '../components/Cursor'
import Walls from '../components/Walls'
import Controls from '../components/Controls'

import ArtistRing from './ArtistRing'
import Music from './Music'


class App extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
    clearUserInfo: PropTypes.func
  }
  componentDidMount() {
    let { SpotifyApi } = this.context
    let { setArtists } = this.props

    // Set the initial step in flow of music discovery
    SpotifyApi.getMyTopArtists()
      .then(data => {
        let topArtists = data.items.filter(d => d.genres.indexOf('comedy') === -1)
        setArtists(topArtists.slice(0, 10))
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Scene>
        <Entity primitive="a-camera">
          <Cursor />
        </Entity>

        <Music />

        <Sky />
        <Floor />
        <Roof />
        <Walls />

        <ArtistRing position={[0, 1.5, 0]} />
      </Scene>
    )
  }
}

export default connect(state => {
  return {
    test: state.app,
    artists: state.artists
  }
}, { setArtists })(App)
