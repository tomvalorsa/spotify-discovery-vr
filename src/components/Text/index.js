import React from 'react'
import { Entity } from 'aframe-react'

const Text = ({text, color}) => (
  <Entity
    text={{text}}
    material={{color}}
    position={[-2, 1, -2]}
  />
)

export default Text