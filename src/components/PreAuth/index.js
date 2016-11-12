import React, { Component } from 'react'
import styles from './index.css'

export default class PreAuth extends Component {
  render() {
    let { redirectToAuth } = this.props

    return (
      <div className={styles.authContainer}>
        <button onClick={redirectToAuth}>Auth me</button>
      </div>
    )
  }
}
