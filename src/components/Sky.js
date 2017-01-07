import React from 'react'
import { Entity } from 'aframe-react'

const Sky = () => {
  const geometry = {
    primitive: 'sphere',
    radius: 100
  }

  const material = {
    shader: 'flat',
    src: '#sky'
  }

  return (
    <Entity
      geometry={geometry}
      material={material}
      scale="1 1 -1"
    />
  )
}

export default Sky
