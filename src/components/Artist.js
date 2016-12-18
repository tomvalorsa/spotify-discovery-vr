import React from 'react'
import { Entity } from 'aframe-react'
import ArtistTile from '../connected/ArtistTile'
import Controls from './Controls'
import {
  PlayPause,
  Previous,
  Next,
  RelatedArtists,
  AddToPlaylist
} from '../connected/Controls'

const Artist = ({ artist, thetaLength, thetaStart, selectedArtist }) => {
  let controls = null

  if (selectedArtist === artist.id) {
    controls = (
      <Controls artist={artist} artistThetaStart={thetaStart}>
        <RelatedArtists />
        <AddToPlaylist />
        <Next />
        <PlayPause />
        <Previous />
      </Controls>
    )
  }

  return (
    <Entity>
      <ArtistTile
        artist={artist}
        img={artist.images && artist.images[0].url}
        thetaLength={thetaLength}
        thetaStart={thetaStart}
      />
      {controls}
    </Entity>
  )
}

export default Artist
