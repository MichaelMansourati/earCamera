import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import '../styles/events.scss'

const events = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <h1 id="title">ear camera</h1>
      <Navbar/>
      <p>you are at the events page</p>
    </div>
  </div>
)

export default events
