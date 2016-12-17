import React from 'react'
import { Entity } from 'aframe-react'
import { Textures } from 'constants'

const Walls = () => {
  const geometry = {
    primitive: 'cylinder',
    height: 3,
    openEnded: true,
    radius: 3,
    segmentsRadial: 36
  }

  const material = {
    side: 'back',
    src: `url(${Textures.wall})`,
    repeat: '60 10'
  }

  return (
    <Entity
      segments-radial="8"
      geometry={geometry}
      material={material}
      position="0 1.5 0"
    />
  )
}

export default Walls
