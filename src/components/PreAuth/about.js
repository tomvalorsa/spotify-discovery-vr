import React from 'react'
import styles from './index.css'
import cls from 'classnames'
import { Icons } from 'constants'

const About = ({ toggleAbout }) => (
  <div className={styles.container}>
    <BackArrow className={styles.back} height="40px" fill="#FFF" onClick={toggleAbout} />
    <div className={cls(styles.about, styles.centreWrap)}>
      <div className={styles.section}>
        <h2>About</h2>

        <p>
          Explore music related to your tastes and create a playlist to listen to on Spotify - all in WebVr.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Usage</h2>

        <p>
          Log in to you Spotify account. Spotify Discovery VR needs access to your display name and top artists, and have permission to create a playlist for you. Once logged in, select an artist to reveal playback controls:
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.controlRow}>
          <div className={styles.control}>
            <img src={Icons.pause} alt="" />
            <div>Play/pause - toggle music playback</div>
          </div>
          <div className={styles.control}>
            <img src={Icons.next} alt="" />
            <div>Skip - cycle through artist's top tracks</div>
          </div>
        </div>
        <div className={styles.controlRow}>
          <div className={styles.control}>
            <img src={Icons.add} alt="" />
            <div>Add - add song to current playlist</div>
          </div>
          <div className={styles.control}>
            <img src={Icons.relatedArtists} alt="" />
            <div>Related artists - view artists related to the one currently selected</div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <p>
          When you're done exploring and adding songs to your playlist, simply look down at your feet and click on the record to save your playlist to Spotify account.
        </p>

        <p style={{textAlign: 'center'}}>
          Your playlist will be named <strong>Spotify Discovery VR - &lt;your name&gt;</strong>
        </p>
      </div>
    </div>
  </div>
)

const BackArrow = (props) => (
  <svg height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
    <path d="M0-.5h24v24H0z" fill="none"/>
  </svg>
)

export default About
