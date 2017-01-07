import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'

export default class Exit extends Component {
  state = {
    saving: false,
    saved: false
  }
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
  }
  handleClick = () => {
    const { playlist: uris } = this.props
    const { SpotifyApi } = this.context

    if (!uris.length) return

    this.setState({saving: true, saved: false})
    let userInfo

    SpotifyApi.getMe()
      .then(user => {
        userInfo = user
        return SpotifyApi.getUserPlaylists(user.id, { limit: 50 })
      })
      .then(playlists => {
        const playlistName = `Spotify Discovery VR - ${userInfo.display_name}`
        const names = playlists.items.map(d => d.name)
        const idx = names.indexOf(playlistName)

        if (idx > -1) {
          return Promise.resolve(playlists.items[idx])
        }
        return SpotifyApi.createPlaylist(userInfo.id, {
          name: `Spotify Discovery VR - ${userInfo.display_name}`
        })
      })
      .then(playlist => {
        return SpotifyApi.addTracksToPlaylist(userInfo.id, playlist.id, uris)
      })
      .then(result => {
        this.setState({saved : true, saving: false})
      })
      .catch(err => console.log(err))

  }
  render() {
    const { saving, saved } = this.state
    const labelColor = saved ? '#1ed760' : '#9b9b9b'
    const labelImg = saved ? '#done' : saving ? '#inProgress' : '#save'

    let spinAnimation = null
    if (saving && !saved) {
      spinAnimation = (
        <a-animation
          attribute="rotation"
          dur="1000"
          fill="forwards"
          to="-90 360 0"
          repeat="indefinite"
        ></a-animation>
      )
    }

    return(
      <Entity onClick={this.handleClick}>
        <a-circle radius="0.7" position="0 0.1 0" material="color: black" rotation="-90 0 0"></a-circle>
        <a-circle radius="0.25" position="0 0.2 0" material={`color: ${labelColor}`} rotation="-90 0 0"></a-circle>
        <a-circle radius="0.2" position="0 0.3 0" material={`src: ${labelImg}`} rotation="-90 0 0">
          {spinAnimation}
        </a-circle>
      </Entity>
    )
  }
}
