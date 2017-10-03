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
        <div className="textArea">
          <p>
            Ear Camera is a collective of bodies creating cochlear art. We are a capillary community, a neural network, an ear that listens, a camerata of peers.
            Our concerts are a living snapshot of our inner chambers developed in dark rooms and focused onto vibrating membranes. We are a lens that reflects the society in which we live.
            we believe that all human experience, rendered in photorealistic detail, is worthy of amplification.
          </p>
          <p>
            <span>Ear Camera is: </span>
            <span>Tommy Davis</span>
            <span> // </span>
            <span>Suzu Enns</span>
            <span> // </span>
            <a href="https://www.indiayeshe.com">India Gailey</a>
            <span> // </span>
            <a href="https://www.jglasermusic.com">Joseph Glaser</a>
            <span> // </span>
            <span>Noa Haran</span>
            <span> // </span>
            <a href="https://soundcloud.com/justin-jaramillo-7">Justin Jaramillo</a>
            <span> // </span>
            <a href="https://soundcloud.com/michaelkimsheng">Michael Kim-Sheng</a>
            <span> // </span>
            <a href="http://iwastherebyaccident.tumblr.com/">Francis Leduc-Bélanger</a>
            <span> // </span>
            <a href="https://michaelmansourati.com">Michael Mansourati</a>
            <span> // </span>
            <span>Chris Paul</span>
            <span> // </span>
            <a href="https://www.jamesrubinomusic.com">James Rubino</a>
            <span> // </span>
            <a href="https://www.soundcloud.com/keithstratton">Keith Stratton</a>
          </p>
          <p>
            Follow ear camera on <a href="https://www.instagram.com/ear_camera">Instagram</a>.
          </p>
        </div>
        <iframe className="youtube" width="560" height="315" src="https://www.youtube.com/embed/FhVnc3K7zo0" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
)

export default about