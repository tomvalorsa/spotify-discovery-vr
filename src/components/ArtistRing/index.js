import React, { Component } from 'react'
import { Entity } from 'aframe-react'
import CurvedTile from '../../connected/CurvedTile'

export default class ArtistRing extends Component {
  render() {
    let { position, artists } = this.props
    let tiles = []

    if (artists) {
      const thetaLength = 30
      const padding = (360 - (artists.length * 30)) / artists.length

      tiles = artists.map((artist, i) => {
        return (
          <CurvedTile
            key={artist.id}
            artist={artist}
            img={artist.images && artist.images[0].url}
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
