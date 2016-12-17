import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'
import defaultImg from '../../images/cat.png'

export class CurvedTile extends Component {
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
    let { img, thetaLength, thetaStart, setTrack, clearTrack } = this.props
    let { track } = this.state

    if (!track) return null

    const geometry = {
      primitive: 'cylinder',
      openEnded: true,
      radius: 2.5,
      thetaLength: thetaLength,
      thetaStart: thetaStart,
      height: 1
    }

    const material = {
      src: `url(${img || defaultImg})`,
      side: 'double', // might be unnecessary
      repeat: '-1 1'
    }

        // onClick={() => setTrack(track)}
    return (
      <Entity
        ref="tile"
        material={material}
        geometry={geometry}
      />
    )
  }
}
