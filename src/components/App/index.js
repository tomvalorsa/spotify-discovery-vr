import React, { Component, PropTypes } from 'react'
import styles from './index.css'

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
  componentDidMount() {
    console.log(this.context.SpotifyApi)
  }
  render() {
    return (
      <Scene>
        <Entity primitive="a-camera">
          <Cursor />
        </Entity>
        <Sky />
        <Tile img={catPath} position={[0.5, 1.5, -1.5]} />
        <Text text="Tremendous!" />
      </Scene>
    )
  }
}