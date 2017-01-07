import React from 'react'
import { Entity } from 'aframe-react'

const Cursor = () => (
  <Entity primitive="a-cursor" cursor="fuse: false" material="color: #4FC3F7">
    <a-animation
      begin="mousedown"
      attribute="material.color"
      from="#4FC3F7"
      to="#283593"
      dur="1"
    ></a-animation>
    <a-animation
      begin="mouseup"
      attribute="material.color"
      from="#283593"
      to="#4FC3F7"
      dur="1"
    ></a-animation>
  </Entity>
)

export default Cursor
