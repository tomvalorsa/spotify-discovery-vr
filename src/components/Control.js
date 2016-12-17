import React from 'react'
import { Entity } from 'aframe-react'

const Control = ({ thetaStart, click, img }) => {
  const material = {
    src: `url(${img})`,
    side: 'back',
    repeat: '-1 1'
  }

  const geometry = {
    primitive: 'cylinder',
    openEnded: true,
    height: 0.2,
    radius: 2.5,
    thetaStart,
    thetaLength: 5
  }

  return (
    <Entity
      material={material}
      geometry={geometry}
    />
  )
}

export default Control