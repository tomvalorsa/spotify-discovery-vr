import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'

export default class Music extends Component {
  componentDidUpdate(prevProps) {
    const { paused, track } = this.props
    const { track: prevTrack } = prevProps
    const { music } = this.refs
    const entity = document.querySelector('[sound]')

    if (paused) {
      entity.pause()
    } else {
      entity.play()
    }

    // TODO: investigate below
    // might need to look into play/stop instead of pause for initial ver

    // below might not be necessary with autoplay sound attr in render

    // no prev track, now we have one PLAY
    // prev track, now we have different one PLAY NEW
    // prev track, still same track - was it playing?
      // yes - pause it
      // no - play it/resume it
  }
  render() {
    const { track } = this.props

    if (!track) return null

    const sound = {
      src: `url(${track.preview_url})`,
      autoplay: true,
      volume: 2,
      loop: true
    }

    return <Entity ref="music" sound={sound} />
  }
}
