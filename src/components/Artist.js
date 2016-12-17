import React from 'react'
import { Entity } from 'aframe-react'
import ArtistTile from './ArtistTile'
import Controls from './Controls'

const Artist = ({ artist, thetaLength, thetaStart }) => (
  <Entity>
    <ArtistTile
      artist={artist}
      img={artist.images && artist.images[0].url}
      thetaLength={thetaLength}
      thetaStart={thetaStart}
    />
    <Controls
      artist={artist}
      artistStart={thetaStart}
      thetaLength={thetaLength}
    />
  </Entity>
)

export default Artist
