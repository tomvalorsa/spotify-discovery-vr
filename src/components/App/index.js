import React, { Component } from 'react'
import styles from './index.css'

import { Scene, Entity } from 'aframe-react'

import Sky from '../Sky'
import Tile from '../Tile'
import Text from '../Text'
import Cursor from '../Cursor'
import SpotifyAuth from '../SpotifyAuth'

import catPath from '../../images/cat.png'

// TODO: split everything into its own component to allow greater flexibility with options/props

export default class App extends Component {
  render() {
    return (
      <SpotifyAuth>
        <Scene>
          <Entity primitive="a-camera">
            <Cursor />
          </Entity>
          <Sky />
          <Tile img={catPath} position={[0.5, 1.5, -1.5]} />
          <Text text="Tremendous!" />
        </Scene>
      </SpotifyAuth>
    )
  }
}