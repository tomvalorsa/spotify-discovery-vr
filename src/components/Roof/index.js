import React, { Component } from 'react'
import { Entity } from 'aframe-react'

const Roof = () => {
  const geometry = {
    primitive: 'cone',
    height: 1,
    openEnded: true,
    radiusBottom: 3,
    radiusTop: 2
  }

  const material = {
    flatShading: true,
    opacity: 0.8,
    side: 'double',
    color: '#ffffff'
  }

  return (
    <Entity
      geometry={geometry}
      material={material}
      position="0 3.5 0"
    />
  )
}

export default Roof
