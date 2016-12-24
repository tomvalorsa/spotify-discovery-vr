import React, { Component } from 'react'
import styles from './index.css'
import Landing from './landing'
import About from './about'

const PreAuth = ({ aboutVisible, redirectToAuth, toggleAbout }) => {
  if (aboutVisible) {
    return <About toggleAbout={toggleAbout} />
  } else {
    return <Landing toggleAbout={toggleAbout} redirectToAuth={redirectToAuth} />
  }
}

export default PreAuth
