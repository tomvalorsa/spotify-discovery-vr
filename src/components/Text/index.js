import React from 'react'
import { Entity } from 'aframe-react'

const Text = ({text}) => (
  <Entity
    text={{text: "Tremendous!"}}
    material={{color: '#000'}}
    position={[0, 1, -2]}
  />
)

export default Text