import React, { Component } from 'react'
import { Entity } from 'aframe-react'

export default class Cursor extends Component {
  render() {
    return (
      <Entity primitive="a-cursor" fuse="true" material="color: #4FC3F7">
        <a-animation
          begin="cursor-fusing"
          easing="ease-in"
          attribute="scale"
          fill="forwards"
          from="1 1 1"
          to="0.1 0.1 0.1"
        />
      </Entity>
    )
  }
}
