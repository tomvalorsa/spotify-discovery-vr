import React, { Component } from 'react'
import { Entity } from 'aframe-react'

export default class PlayPause extends Compoennt {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
  }
  handleClick = () => {
    const { artist, togglePaused, setArtistInfo, selectedArtist } = this.props
    const { SpotifyApi } = this.context

    if (selectedArtist === artist.id) {
      return togglePaused
    }

    // otherwise do spotify api calls and fire artist info action
    // OR send spotify client to action to make calls...?

    setArtistInfo(artist)
  }
  render() {
    const { thetaStart, click, img } = this.props

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
        onClick={this.handleClick}
        material={material}
        geometry={geometry}
      />
    )
  }
}

export default Control