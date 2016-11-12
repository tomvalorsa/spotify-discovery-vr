import React, { Component } from 'react'
import styles from './index.css'

export default class PreAuth extends Component {
  render() {
    let { redirectToAuth } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.centreWrap}>
          <h1>Spotfiy Discovery 3D</h1>
          <p>Discover new music in WebVR</p>

          <div className={styles.buttonWrap}>
            <button className={styles.primary} onClick={redirectToAuth}>GET STARTED</button>
            <button>ABOUT</button>
          </div>
        </div>

        <p className={styles.madeWith}>
          Made with ♥ by <a href="https://github.com/tomvalorsa">Tom Valorsa</a>
        </p>
      </div>
    )
  }
}
