import React from 'react'
import Link from 'gatsby-link'

import '../styles/personnel.scss'
import  bio_EC from '../images/bio_EC.svg'
import  Glaser_polaroid from '../images/Glaser_polaroid_compressed.png'
import  Kim_Sheng_polaroid from "../images/Kim_Sheng_polaroid.jpg"
import  Stratton_polaroid from '../images/Stratton_polaroid.jpg'
import Rubino_polaroid from '../images/Rubino_polaroid.png'

const Personnel = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <h1 id="title">ear camera</h1>
      <div className="navigation">
        <Link className="link" to="/about/">about</Link>
        <Link className="link" to="/media/">media</Link>
        <Link className="link" to="/personnel">personnel</Link>
        <Link className="link" to="/events/">events</Link>
        <Link className="link" to="/another-thing/">another thing</Link>
      </div>
      <div className="page-goes-here personnel">
        <div className="textArea">
          <h2>Personnel</h2>
          <div className="bioContainer">
            <div className="bio">
              <img className="bioImage" src="xxx" alt="image tbd"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">India Yeshe Gailey</h3>
                <p>Thoughts smell like aqua<br/>
                   borealis fabric swingsets<br/>
                   eating chocolate
                </p>
                <a href="https://www.indiayeshe.com">indiayeshe.com</a>
              </div>
            </div>
            <div className="bio mirror">
              <img className="bioImage" src={Glaser_polaroid} alt="image tbd" width="200px"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">Joseph Glaser</h3>
                <p>
                  remove quarters of a large dose of aggressiveness that transforms the dialogue into a number of key concepts:
                  that i will remain forever economically legally and freshly ground with modernist art and criticism,
                  since repression through condensation and displacement are structurally engineered with great regularity to be prolonged.<br/><br/>
                  however, if you wish to taste a muscle mass while gauging the context of art, artists might have been derived from such ventral extension in their utmost details.
                  in other words, movements not muscles are represented unipennate from their origin to their actions. fibers of gravity are impossible from their origin or through muscles.<br/><br/>
                  Written in collaboration with Henry Gray, Deb Perelman, Rosalind Krauss, Benjamin Buchloh, Hal Foster, Yve-Alain Bois, and voicebox
                </p>
                <a href="https://www.jglasermusic.com">jglasermusic.com</a>
              </div>
            </div>
            <div className="bio">
              <img className="bioImage" src={Kim_Sheng_polaroid} alt="image tbd"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">Michael Kim-Sheng</h3>
                <p>
                  "Michael is a short, chubby rodent" <br/>
                  - Michael Kim-Sheng <br/><br/>
                  "Michael is an important rodent to other lizards in the world"<br/>
                  - James Rubino <br/><br/>
                  "Michael is a panini lizard" <br/>
                  - Keith Stratton <br/><br/>
                  "Michael makes music for and with lizards" <br/>
                  - Joseph Glaser

                </p>
              </div>
            </div>
            <div className="bio mirror">
              <img className="bioImage" src="xxx" alt="image tbd"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">Michael Mansourati</h3>
                <p>
                  ♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪music is my life♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪
                </p>
                <a href="https://www.michaelmansourati.com">michaelmansourati.com</a>
              </div>
            </div>
            <div className="bio">
              <img className="bioImage" src={Stratton_polaroid} alt="image tbd"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">Keith Stratton</h3>
                <p>
                  Keith Stratton is part of the supposedly sensitive carbon that refreshes the contextual uncertainty of short film short films.
                  Its hobbies include folding laundry, MS paint, walking stairs, using sunbathing and reading aids.
                  He got acquainted with the headset's earpiece in a cave in South Oss, where he was engaged in field recordings when he was working at that time.
                  He is currently living on the ground and can usually find sad calls when he does not ratify Todd Rundgren's memories.<br/><br/>

                  Keith Stratton sensitive parts of the claim to be a video background around about the video.
                  , And 're the hevend. Yu was not a dray, Hao yo. I'm a GOOD. If he does not agree with the memory of Todd Langlin. <br/><br/>

                  Detailed part of the video background argument around Kit Shatan's video.
                  , That, its idea. Originally it is not a twist, Hao. I am okay. If he does not agree with Todd Lange 's memory. <br/><br/>

                  Particular part of the video argument around the Watt Kit video. Yes, his opinion.
                  First of all, it's not casualties, Hao. I'm right. If he does not agree with Todd Lange's memory. <br/><br/>


                  [translated by Bing]
                </p>
                <a href="https://www.soundcloud.com/keithstratton">soundcloud.com/keithstratton</a>
              </div>
            </div>
            <div className="bio mirror">
              <img className="bioImage" src={Rubino_polaroid} alt="image tbd"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">James Rubino</h3>
                <p id="jamesOwl">
                  <img src={bio_EC} height="450px"/>
                </p>
                <a href="https://www.jamesrubinomusic.com">jamesrubinomusic.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )

export default Personnel