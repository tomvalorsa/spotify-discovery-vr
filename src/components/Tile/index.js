import React, { Component } from 'react'
import { Entity } from 'aframe-react'

export default class Tile extends Component {
  click = () => {
    console.log('clicked a tile, noice')
  }
  render() {
    let { img, position } = this.props

    return (
      <Entity
        onClick={this.click}
        geometry={{primitive: 'box'}}
        material={{src: `url(${img})`}}
        position={position}
      />
    )
  }
}