import React from 'react'
import { Entity } from 'aframe-react'

const Floor = ({img, height = 100, width = 100}) => {
  const geometry = {
    primitive: 'plane',
    height,
    width
  }

  const material = {
    shader: 'flat',
    src: `url(${img})`,
    repeat: '100 100'
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
