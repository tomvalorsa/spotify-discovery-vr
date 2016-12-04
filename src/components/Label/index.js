import React from 'react'
import { Entity } from 'aframe-react'

const Label = ({text}) => (
  <a-entity id="box" geometry="primitive: box" position="0 2 0" draw="background: #D7E8FF" textwrap="textAlign: center; x: 128; y: 128; text: Hello world!"></a-entity>
)

export default Label
