import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'

export default class PlayPause extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
  }
  handleClick = () => {
    console.log('clicked')
    const { artist, togglePaused, setArtistInfo, selectedArtist } = this.props
    const { SpotifyApi } = this.context

    if (selectedArtist === artist.id) {
      return togglePaused()
    }

    SpotifyApi.getArtistTopTracks(artist.id, 'AU')
      .then(result => {
        setArtistInfo(artist.id, result.tracks)
      })
      .catch(err => console.log(err))
  }
  render() {
    const { thetaStart, img } = this.props

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
