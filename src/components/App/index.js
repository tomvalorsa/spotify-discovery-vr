import React, { Component } from 'react'
import styles from './index.css'

import 'aframe'
import 'aframe-text-component'
import { Scene, Entity } from 'aframe-react'

import Sky from '../Sky'
import Tile from '../Tile'
import Text from '../Text'

import catPath from '../../images/cat.png'

// TODO: split everything into its own component to allow greater flexibility with options/props

export default class App extends Component {
  render() {
    return (
      <Scene>
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"></Entity>
        </Entity>
        <Sky />
        <Tile img={catPath} position={[2, 1, -3]} />
        <Text text="Tremendous!" />
      </Scene>
    )
  }
}