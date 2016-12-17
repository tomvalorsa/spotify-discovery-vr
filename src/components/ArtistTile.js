import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'
import defaultImg from '../images/cat.png'

const ArtistTile = ({ img, thetaLength, thetaStart }) => {
  const geometry = {
    primitive: 'cylinder',
    openEnded: true,
    radius: 2.5,
    height: 1,
    thetaLength,
    thetaStart
  }

  const material = {
    src: `url(${img || defaultImg})`,
    side: 'back',
    repeat: '-1 1'
  }

  return (
    <Entity
      material={material}
      geometry={geometry}
    />
  )
}

export default ArtistTile
