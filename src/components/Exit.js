import React, { Component, PropTypes } from 'react'
import { Entity } from 'aframe-react'

export default class Exit extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
  }
  handleClick = () => {
    const { playlist: uris } = this.props
    const { SpotifyApi } = this.context
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
        console.log('done making playlist')
        // fire some kind of animation/indication of completion here
      })
      .catch(err => console.log(err))

  }
  render() {
    return(
      <a-sphere color="yellow" radius="0.2" onClick={this.handleClick}></a-sphere>
    )
  }
}
