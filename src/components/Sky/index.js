import React from 'react'
import { Entity } from 'aframe-react'

const Sky = ({img}) => (
  <Entity
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', src: `url(${img})`}}
    scale="1 1 -1"
  />
)

export default Sky