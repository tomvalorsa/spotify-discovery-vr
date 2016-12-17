import React, { Component } from 'react'
import { Entity } from 'aframe-react'
import Artist from './Artist'

export default class ArtistRing extends Component {
  render() {
    const { position, artists } = this.props
    let tiles = []

    if (artists) {
      const thetaLength = 29
      const padding = (360 - (artists.length * 29)) / artists.length

      tiles = artists.map((artist, i) => {
        return (
          <Artist
            key={artist.id}
            artist={artist}
            thetaLength={thetaLength}
            thetaStart={i * (thetaLength + padding)}
          />
        )
      })
    }

    return (
      <Entity position={position}>
        {tiles}
      </Entity>
    )
  }
}
