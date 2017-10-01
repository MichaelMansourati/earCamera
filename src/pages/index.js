import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import '../styles/index.scss'


import legg from '../images/legg.jpg'
import transcripts from '../images/transcripts.png'
import ensemble from '../images/ensemble.jpg'

const IndexPage = () => (
  <div className="mainContainer">
    <div className="mobileSplash">
      <img className="legg" src={legg}/>
    </div>
    <div className="splash">
      <p className="downArrow">⌄</p>
    </div>
    <div className="contentArea">
      <h1 id="title">ear camera</h1>
      <Navbar/>
      <div className="page-goes-here">
        <div className="imgs">
          <img className="description" src={transcripts}/>
          <img className="theBand" src={ensemble}/>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
