import React, { Component, PropTypes } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Scene, Entity } from 'aframe-react'

import Sky from '../components/Sky'
import Roof from '../components/Roof'
import Floor from '../components/Floor'
import Text from '../components/Text'
import Cursor from '../components/Cursor'
import Label from '../components/Label'
import ArtistRing from '../components/ArtistRing'
import Walls from '../components/Walls'

import CurvedTile from './CurvedTile'
import FlatTile from './FlatTile'
import Music from './Music'


class App extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
    clearUserInfo: PropTypes.func
  }
  state = {
    topArtists: []
  }
  componentDidMount() {
    let { SpotifyApi } = this.context

    SpotifyApi.getMyTopArtists()
      .then(data => {
        // will probs need to filter out comedians too
        // let genres = _.uniq(_.flatten(data.items.map(d => d.genres)))
        this.setState({topArtists: data.items.slice(0, 10)})
      })
      .catch(err => console.log(err))
  }
  render() {
    let { topArtists } = this.state

    return (
      <Scene>
        <Entity primitive="a-camera">
          <Cursor />
        </Entity>

        <Sky />
        <Floor />
        <Roof />
        <Walls />

        <Music />
        {/*<Label />*/}
        <ArtistRing position={[0, 1.5, 0]} artists={topArtists} />
        {/*username ? <Text text={`Welcome, ${username}!`} /> : null*/}
      </Scene>
    )
  }
}

export default connect(state => ({test: state.app}))(App)

