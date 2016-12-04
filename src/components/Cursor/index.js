import React, { Component } from 'react'
import { Entity } from 'aframe-react'

export default class Cursor extends Component {
  render() {
    return (
      <Entity primitive="a-cursor" fuse="true" material="color: red">
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

// <a-entity cursor="fuse: true; fuseTimeout: 500"
//           position="0 0 -1"
//           geometry="primitive: ring"
//           material="color: black; shader: flat">
//   <a-animation begin="click" easing="ease-in" attribute="scale"
//                fill="backwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
//   <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
//                fill="forwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
// </a-entity>