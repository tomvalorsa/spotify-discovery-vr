import React, { Component, PropTypes } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Scene, Entity } from 'aframe-react'

import Sky from '../components/Sky'
import Roof from '../components/Roof'
import Floor from '../components/Floor'
import Text from '../components/Text'
import Cursor from '../components/Cursor'
import Label from '../components/Label'
import ArtistRing from '../components/ArtistRing'

import CurvedTile from './CurvedTile'
import FlatTile from './FlatTile'
import Music from './Music'

import catPath from '../images/cat.png'
import skyPath from '../images/sky.jpg'
import floor1 from '../images/floor1.jpg'
import floor2 from '../images/floor2.jpg'
import floor3 from '../images/floor3.jpg'
import wall1 from '../images/wall1.jpg'
import wall2 from '../images/wall2.jpg'

// TODO: split everything into its own component to allow greater flexibility with options/props
// - get user's country on login and save to redux state

class App extends Component {
  static contextTypes = {
    SpotifyApi: PropTypes.object.isRequired,
    clearUserInfo: PropTypes.func
  }
  state = {
    topArtists: []
  }
  componentDidMount() {
    let { SpotifyApi } = this.context

    SpotifyApi.getMyTopArtists()
      .then(data => {
        // will probs need to filter out comedians too
        // let genres = _.uniq(_.flatten(data.items.map(d => d.genres)))
        this.setState({topArtists: data.items.slice(0, 10)})
      })
      .catch(err => console.log(err))
  }
  render() {
    let { topArtists } = this.state

    let padding = 5
    let thetaLength = (360 / topArtists.length) - padding
    let thetaStart = 0
    console.log('thetaLength', thetaLength)

    return (
      <Scene>
        <Entity primitive="a-camera">
          <Cursor />
        </Entity>
        <Sky img={skyPath} />
        <Floor img={floor3} />
        <Roof />

        <Entity
          color="cyan"
          segments-radial="8"
          geometry="primitive:cylinder;height:3;openEnded:true;radius:3;segmentsRadial:36"
          material={`color:#C3AE8F;side:double;src:url(${wall2});repeat:60 10;`}
          position="0 1.5 0"
        />

        {/*<a-light type="point" color="blue" position="0 5 0"></a-light>*/}

        <Music />
        {/*<Label />*/}
        <ArtistRing position={[0, 1.5, 0]} artists={topArtists} />
        {/*username ? <Text text={`Welcome, ${username}!`} /> : null*/}
      </Scene>
    )
  }
}

export default connect(state => ({test: state.app}))(App)

