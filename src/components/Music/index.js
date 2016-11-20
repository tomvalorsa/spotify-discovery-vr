import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'

export default class Music extends Component {
  render() {
    const { track } = this.props

    if (!track) return null

    const sound = {
      src: `url(${track})`,
      volume: 2,
      autoplay: true,
      loop: true
    }

    return <Entity sound={sound} />
  }
}
