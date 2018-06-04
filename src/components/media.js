import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'
import Title from '../components/title.js'

import '../styles/media.css'

import blur from '../assets/photography/blur.jpg'
import ensemble from '../assets/photography/ensemble.jpg'
import tommy from '../assets/photography/tommy.jpg'

const media = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <div className="media-page-goes-here">
        <div className="yt-container yt-container-media">
          <iframe
            className="youtube"
            id="youtube-media"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ke0VSWKGJuc"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <img src={blur} />
        <img src={tommy} />
        <img src={ensemble} />
      </div>
    </div>
  </div>
)

export default media
