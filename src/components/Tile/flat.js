import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'

export class FlatTile extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired
  }
  state = {
    track: undefined
  }
  componentDidMount() {
    let { SpotifyApi } = this.context
    let { artist } = this.props

    SpotifyApi.getArtistTopTracks(artist.id, 'AU', {}, (err, data) => {
      this.setState({track: data.tracks[0].preview_url})
    })

    // this tile needs to know about the track it's playing as it needs to come from this direction
    // also need to manage what is playing in state
  }
  render() {
    let { img, position, setTrack, clearTrack } = this.props
    let { track } = this.state

    if (!track) return null

    const geometry = {
      primitive: 'box',
      height: 1,
      depth: 0.1
    }

    const material = {
      src: `url(${img})`
    }

    return (
      <Entity
        ref="tile"
        onClick={() => setTrack(track)}
        material={material}
        geometry={geometry}
        position={position}
      />
    )
  }
}
