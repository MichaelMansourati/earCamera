import React from 'react'
import Link from 'gatsby-link'

import '../styles/personnel.scss'
import  bio_EC from '../images/bio_EC.svg'

const Personnel = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <h1 id="title">ear camera</h1>
      <div className="navigation">
        <Link className="link" to="/about/">about</Link>
        <Link className="link" to="/media/">media</Link>
        <Link className="link" to="/personnel">personnel</Link>
        <Link className="link" to="/events/">events</Link>
        <Link classNAme="lnik" to="/another-thing/">another thing</Link>
      </div>
      <div className="page-goes-here personnel">
        <div className="textArea">
          <h2>Personnel</h2>
          <div className="bioContainer">
            <div className="bio">
              <img className="bioImage" src="https://i.imgur.com/Hn4qTke.jpg" width='150px' height="150px"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">India Yeshe Gailey</h3>
                <p>Thoughts smell like aqua<br/>
                   borealis fabric swingsets<br/>
                   eating chocolate
                </p>
                <a href="indiayeshe.com">indiayeshe.com</a>
              </div>
            </div>
            <div className="bio mirror">
              <img className="bioImage" src="https://i.imgur.com/Hn4qTke.jpg" width='150px' height="150px"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">Joseph Glaser</h3>
                <p>
                  remove quarters of a large dose of aggressiveness that transforms the dialogue into a number of key concepts: that i will remain forever economically legally and freshly ground with modernist art and criticism, since repression through condensation and displacement are structurally engineered with great regularity to be prolonged.<br/>
                  however, if you wish to taste a muscle mass while gauging the context of art, artists might have been derived from such ventral extension in their utmost details.
                  in other words, movements not muscles are represented unipennate from their origin to their actions. fibers of gravity are impossible from their origin or through muscles.<br/><br/>
                  Written in collaboration with Henry Gray, Deb Perelman, Rosalind Krauss, Benjamin Buchloh, Hal Foster, Yve-Alain Bois, and voicebox
                </p>
                <a href="jglasermusic.com">jglasermusic.com</a>
              </div>
            </div>
            <div className="bio">
              <img className="bioImage" src="https://i.imgur.com/Hn4qTke.jpg" width='150px' height="150px"/>
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
              <img className="bioImage" src="https://i.imgur.com/Hn4qTke.jpg" width='150px' height="150px"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">Michael Mansourati</h3>
                <p>
                  ♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪music is my life♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪
                </p>
                <a href="michaelmansourati.com">michaelmansourati.com</a>
              </div>
            </div>
            <div className="bio">
              <img className="bioImage" src="https://i.imgur.com/Hn4qTke.jpg" width='150px' height="150px"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">Keith Stratton</h3>
                <p>
                  Keith Stratton is part of the supposedly sensitive carbon that refreshes the contextual uncertainty of short film short films.
                  Its hobbies include folding laundry, MS paint, walking stairs, using sunbathing and reading aids.
                  He got acquainted with the headset's earpiece in a cave in South Oss, where he was engaged in field recordings when he was working at that time.
                  He is currently living on the ground and can usually find sad calls when he does not ratify Todd Rundgren's memories. [translated by Bing]
                </p>
              </div>
            </div>
            <div className="bio mirror">
              <img className="bioImage" src="https://i.imgur.com/Hn4qTke.jpg" width='150px' height="150px"/>
              <div className="space25px"></div>
              <div className="bioText">
                <h3 className="name">James Rubino</h3>
                <p>
                  <img alt="dingo" src={bio_EC} height="300px"/>
                </p>
                <a href="jamesrubinomusic.com">jamesrubinomusic.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )

export default Personnel