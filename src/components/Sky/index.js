import React from 'react'
import { Entity } from 'aframe-react'
import { Textures } from 'constants'

const Sky = () => (
  <Entity
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', src: `url(${Textures.sky})`}}
    scale="1 1 -1"
  />
)

export default Sky
