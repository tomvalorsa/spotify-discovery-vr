import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'
import defaultImg from '../images/cat.png'

export default class ArtistTile extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
  }
  handleClick = () => {
    const { artist, setArtistInfo } = this.props
    const { SpotifyApi } = this.context

    SpotifyApi.getArtistTopTracks(artist.id, 'AU')
      .then(result => {
        setArtistInfo(artist.id, result.tracks)
      })
      .catch(err => console.log(err))
  }
  render() {
    const { img, thetaLength, thetaStart } = this.props

    const geometry = {
      primitive: 'cylinder',
      openEnded: true,
      radius: 2.5,
      height: 1,
      thetaLength,
      thetaStart
    }

    const material = {
      src: `url(${img || defaultImg})`,
      side: 'back',
      repeat: '-1 1'
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
