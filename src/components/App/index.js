import React, { Component, PropTypes } from 'react'
import styles from './index.css'
import _ from 'lodash'

import { Scene, Entity } from 'aframe-react'

import Sky from '../Sky'
import Text from '../Text'
import Cursor from '../Cursor'

import Tile from '../../connected/Tile'
import Music from '../../connected/Music'

import catPath from '../../images/cat.png'
import skyPath from '../../images/sky.jpg'

// TODO: split everything into its own component to allow greater flexibility with options/props
// - get user's country on login and save to redux state
// - make this a connected component!

export default class App extends Component {
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

    let padding = 5
    let thetaLength = (360 / topArtists.length) - padding
    let thetaStart = 0

    return (
      <Scene>
        <Entity primitive="a-camera">
          <Cursor />
        </Entity>
        <Sky img={skyPath} />

        <Music />

        <Entity position={[0, 1.5, 0]}>
          {topArtists.map((artist, i) => {
            const img = artist.images && artist.images[0].url
            const thetaStart = i * (thetaLength + padding)
            return (
              <Tile
                key={artist.id}
                artist={artist}
                img={img || catPath}
                thetaLength={thetaLength}
                thetaStart={thetaStart}
              />
            )
          })}
        </Entity>
        {/*username ? <Text text={`Welcome, ${username}!`} /> : null*/}
      </Scene>
    )
  }
}
