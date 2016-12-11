import React from 'react'
import { Entity } from 'aframe-react'
import { Textures } from 'constants'

const Walls = ({}) => (
  <Entity
    segments-radial="8"
    geometry="primitive:cylinder;height:3;openEnded:true;radius:3;segmentsRadial:36"
    material={`side:double;src:url(${Textures.wall});repeat:60 10;`}
    position="0 1.5 0"
  />
)

export default Walls
