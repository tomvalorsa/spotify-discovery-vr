import React, { Component } from 'react'
import styles from './index.css'

const Landing = ({ redirectToAuth, toggleAbout }) => (
  <div className={styles.container}>
    <div className={styles.centreWrap}>
      <h1>Spotfiy Discovery VR</h1>
      <p>Discover new music in WebVR</p>

      <div className={styles.buttonWrap}>
        <button className={styles.primary} onClick={redirectToAuth}>GET STARTED</button>
        <button onClick={toggleAbout}>ABOUT</button>
      </div>
    </div>

    <p className={styles.madeWith}>
      Made with ♥ by <a href="https://github.com/tomvalorsa">Tom Valorsa</a>
    </p>
  </div>
)

export default Landing
