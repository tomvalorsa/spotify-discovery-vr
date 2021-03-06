import React from 'react'
import { Entity } from 'aframe-react'

const Floor = () => {
  const geometry = {
    primitive: 'circle',
    radius: 3.1
  }

  const material = {
    shader: 'flat',
    src: '#floor',
    repeat: '4 4'
  }

  return (
    <Entity
      geometry={geometry}
      rotation="-90 0 0"
      material={material}
    />
  )
}

export default Floor
