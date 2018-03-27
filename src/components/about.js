import React from 'react'
import {Helmet} from 'react-helmet'

import '../styles/about.css'

const About = () => (
  <div className="page-goes-here">
    <Helmet>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
    </Helmet>
    <div className="textArea">
      <p>
        Ear Camera is a collective of bodies creating cochlear art. We are a capillary community, a neural network, an ear that listens, a camerata of peers. Our concerts are a living snapshot of our inner chambers developed in dark rooms and focused onto vibrating membranes. We are a lens that reflects the society in which we live. We believe that all human experience, rendered in photorealistic detail, is worthy of amplification.
      </p>
      <p>
        <span>Ear Camera is: </span>
        <a target="_blank" href="http://www.tommysaxophone.com">Tommy Davis</a><span> // </span>
        <a target="_blank" href="https://www.indiayeshe.com">India Gailey</a><span> // </span>
        <a target="_blank" href="http://www.jglasermusic.com">Joseph Glaser</a><span> // </span>
        <a target="_blank" href="https://soundcloud.com/noa-haran">Noa Haran</a><span> // </span>
        <a target="_blank" href="https://soundcloud.com/justin-jaramillo-7">Justin Jaramillo</a><span> // </span>
        <a target="_blank" href="https://soundcloud.com/michaelkimsheng">Michael Kim-Sheng</a><span> // </span>
        <a target="_blank" href="http://michaelmansourati.com">Michael Mansourati</a><span> // </span>
        <a target="_blank" href="http://www.jamesrubinomusic.com">James Rubino</a><span> // </span>
        <a target="_blank" href="https://www.soundcloud.com/keithstratton">Keith Stratton</a>
      </p>
      <p>
        <a target="_blank" href="https://www.facebook.com/EarCamera/">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <span className="faSlash"> // </span>
        <a target="_blank" href="https://www.instagram.com/ear_camera">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <span className="faSlash"> // </span>
        <a target="_blank" href="https://twitter.com/earCamera">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <span className="faSlash"> // </span>
        <a href="mailto:mail@ear.camera">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </p>
      <p>Logo by <a href="https://www.kasiasuro.com">Kasia Suro</a>.</p>
    </div>
    <div className="yt-container">
      <iframe className="youtube" id="about-yt" width="560px" height="315px" src="https://www.youtube.com/embed/65dl6LzR1ec" frameBorder="0" allowFullScreen></iframe>
    </div>
  </div>
)

export default About