import React, { Component } from 'react'
import { Entity } from 'aframe-react'
import CurvedTile from '../../connected/CurvedTile'
import Controls from '../Controls'

export default class ArtistRing extends Component {
  render() {
    let { position, artists } = this.props
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


class Artist extends Component {
  render() {
    let { artist, thetaLength, thetaStart } = this.props

    return (
      <Entity>
        <CurvedTile
          artist={artist}
          img={artist.images && artist.images[0].url}
          thetaLength={thetaLength}
          thetaStart={thetaStart}
        />
        <Controls artistStart={thetaStart} thetaLength={thetaLength} />
      </Entity>
    )
  }
}

/*
  ArtistRing should return an Artist and Controls for that artist

  They need to be wrapped in the ArtistRing component so they are positioned together in
  the same entity
*/

