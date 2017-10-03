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
      <div className="media-page-goes-here">
        <iframe className="soundCloud" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345087319&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        <p>
          recorded at le Cagibi, Montreal QC, 21-05-17<br/><br/>

          personnel:<br/>
          Rob Cosgrove // Tommy Davis // Suzu Enns // Joseph Glaser // Noa Haran // Justin Jaramillo // Daniel Meyer-O'Keefe // Chris Paul // James Rubino
        </p>
        <br/><br/>
        <iframe className="soundCloud" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345087132&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        <p>
          recorded at le Cagibi, Montreal QC, 21-05-17<br/>
          ~world premiere~<br/><br/>

          personnel:<br/>
          Tommy Davis // Suzu Enns // Chris Paul // James Rubino // Keith Stratton
        </p>
      </div>
    </div>
  </div>
)

export default media