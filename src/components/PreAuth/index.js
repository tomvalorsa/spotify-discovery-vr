import React, { Component } from 'react'
import styles from './index.css'
import Landing from './landing'
import About from './about'

const PreAuth = ({ aboutVisible, redirectToAuth, toggleAbout }) => {
  let component
  if (aboutVisible) {
    component = <About toggleAbout={toggleAbout} />
  } else {
    component = <Landing toggleAbout={toggleAbout} redirectToAuth={redirectToAuth} />
  }

  return (
    <div className={styles.container}>
      {component}
    </div>
  )
}

export default PreAuth
