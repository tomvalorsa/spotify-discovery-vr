import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'

export default class RelatedArtists extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
  }
  handleClick = () => {
    const { artist, setArtists, togglePaused } = this.props
    const { SpotifyApi } = this.context

    togglePaused()

    SpotifyApi.getArtistRelatedArtists(artist.id)
      .then(result => {
        const relatedArtists = result.artists.slice(0, 10)
        setArtists(relatedArtists)
      })
      .catch(err => console.log(err))
  }
  render() {
    const { thetaStart, click, img } = this.props

    const material = {
      src: img,
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
