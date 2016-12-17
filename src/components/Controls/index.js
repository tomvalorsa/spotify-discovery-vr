import React, { Component } from 'react'
import { Entity } from 'aframe-react'
import { ControlIcons } from 'constants'

export default class Controls extends Component {
  render() {
    let { artistStart } = this.props

    const controlOrder = [
      'relatedArtists',
      'add',
      'next',
      'play',
      'previous'
    ]
    const position = "0 -0.7 0"

    return (
      <Entity position={position}>
        {controlOrder.map((control, i) => {
          return (
            <Control
              key={control}
              type={control}
              thetaStart={artistStart + ((5 * i) + i)}
            />
          )
        })}
      </Entity>
    )
  }
}

class Control extends Component {
  render() {
    let { thetaStart, type } = this.props

    const material = {
      src: `url(${ControlIcons[type]})`,
      side: 'double',
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
}
