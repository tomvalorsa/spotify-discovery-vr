import React, { Component, Children, cloneElement } from 'react'
import { Entity } from 'aframe-react'
import Control from './Control'

const Controls = ({ artistThetaStart, artist, children }) => {
  let positionedChildren = Children.map(children, (child, i) => {
    return cloneElement((child), {
      thetaStart: artistThetaStart + ((5 * i) + i),
      artist
    })
  })

  return (
    <Entity position="0 -0.7 0">
      {positionedChildren}
    </Entity>
  )
}

export default Controls
