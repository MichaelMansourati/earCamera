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
        <iframe className="youtube" id="youtube-media" width="560" height="315" src="https://www.youtube.com/embed/Ke0VSWKGJuc" frameBorder="0" allowFullScreen></iframe>
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