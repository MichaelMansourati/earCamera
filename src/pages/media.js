import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'
import Title from '../components/title.js'

import '../styles/media.css'

const media = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <Title/>
      <Navbar/>
      <div className="media-page-goes-here">
        <div className="yt-caption-container">
          <iframe className="youtube" id="youtube-media" width="560" height="315" src="https://www.youtube.com/embed/Ke0VSWKGJuc" frameBorder="0" allowFullScreen></iframe>
          <span>Video by <a target="_blank" href="http://iwastherebyaccident.tumblr.com/">Francis Leduc-Bélanger</a>.</span>
        </div>
      </div>
    </div>
  </div>
)

export default media