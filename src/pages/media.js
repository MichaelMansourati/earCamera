import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import legg from '../images/legg.jpg'

import '../styles/media.scss'

const media = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <h1 id="title">ear camera</h1>
      <Navbar/>
      <div className="page-goes-here">
        <div className="centeringDiv">
          <p className="mediaForthcoming"><i>media forthcoming</i></p>
          <img className="legg" src={legg} />
        </div>
      </div>
    </div>
  </div>
)

export default media