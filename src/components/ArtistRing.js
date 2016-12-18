import React, { Component } from 'react'
import { Entity } from 'aframe-react'
import Artist from './Artist'

const ArtistRing = ({ position, artists }) => {
  let tiles = []

  if (artists.length) {
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

export default ArtistRing
