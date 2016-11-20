import React, { Component, PropTypes } from 'react'
import styles from './index.css'
import _ from 'lodash'

import { Scene, Entity } from 'aframe-react'

import Sky from '../Sky'
import Tile from '../Tile'
import Text from '../Text'
import Cursor from '../Cursor'

import catPath from '../../images/cat.png'

// TODO: split everything into its own component to allow greater flexibility with options/props

export default class App extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired
  }
  state = {
    username: undefined
  }
  componentDidMount() {
    let { SpotifyApi } = this.context

    SpotifyApi.getMyTopArtists()
      .then(data => {
        // will probs need to filter out comedians too
        let genres = _.uniq(_.flatten(data.items.map(d => d.genres)))
        // display these all around the user as there will generally be lots of them
        // shapes with text on them
        // how to spread out shapes?
        debugger
      })
      .catch(err => console.log(err))
  }
  render() {
    let { username } = this.state

    return (
      <Scene>
        <Entity primitive="a-camera">
          <Cursor />
        </Entity>
        <Sky />
        <Tile img={catPath} position={[0.5, 1.5, -1.5]} />
        {/*username ? <Text text={`Welcome, ${username}!`} /> : null*/}
      </Scene>
    )
  }
}