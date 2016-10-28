import React from 'react'
import { Entity } from 'aframe-react'

const Sky = (props) => (
  <Entity
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', color: '#1976d2'}}
    scale="1 1 -1"
  />
)

export default Sky