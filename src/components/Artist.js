import React from 'react'
import { Entity } from 'aframe-react'
import ArtistTile from './ArtistTile'
import Controls from './Controls'
import {
  PlayPause,
  Previous,
  Next,
  RelatedArtists,
  AddToPlaylist
} from '../connected/Controls'

const Artist = ({ artist, thetaLength, thetaStart }) => (
  <Entity>
    <ArtistTile
      artist={artist}
      img={artist.images && artist.images[0].url}
      thetaLength={thetaLength}
      thetaStart={thetaStart}
    />
    <Controls artist={artist} artistThetaStart={thetaStart}>
      <RelatedArtists />
      <AddToPlaylist />
      <Next />
      <PlayPause />
      <Previous />
    </Controls>
  </Entity>
)

export default Artist
