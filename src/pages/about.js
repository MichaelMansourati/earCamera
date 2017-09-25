import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import '../styles/index.scss'

import transcripts from '../images/transcripts.png'
import ensemble from '../images/ensemble.jpg'

const about = () => (
  <div className="mainContainer">
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

export default about