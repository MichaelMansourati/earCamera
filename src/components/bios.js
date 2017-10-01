import React from 'react'

//this will eventually be the react component that creates an HTML element of all the bios in a random order.

const IndiaYG = {
  name: "India Yeshe Gailey",
  bio: "Thoughts smell like aqua<br/>borealis fabric swingsets<br/>eating chocolate",
  link: "https://www.indiayeshe.com",
  isMirror: false
}

const JosephG = {
  name: "Joseph Glaser",
  bio: `remove quarters of a large dose of aggressiveness that transforms the dialogue into a number of key concepts:
        that i will remain forever economically legally and freshly ground with modernist art and criticism,
        since repression through condensation and displacement are structurally engineered with great regularity to be prolonged.<br/><br/>
        however, if you wish to taste a muscle mass while gauging the context of art, artists might have been derived from such ventral extension in their utmost details.
        in other words, movements not muscles are represented unipennate from their origin to their actions. fibers of gravity are impossible from their origin or through muscles.<br/><br/>
        Written in collaboration with Henry Gray, Deb Perelman, Rosalind Krauss, Benjamin Buchloh, Hal Foster, Yve-Alain Bois, and voicebox`,
  link: "https://www.jglasermusic.com",
  isMirror: false
}

const JustinJ = {
  name: "Justin Jaramillo",
  bio: `i. i uh. i don’t know. i bang my head against the wall. i don’t know. like music. i don’t know. techno. leon vinyl. good stuff.
        i don’t even know to spell it. it’s like v y n e h a l l. deep house.`,
  link: "https://soundcloud.com/justin-jaramillo-7",
  isMirror: false
}

const MichaelKS = {
  name: "Michael Kim-Sheng",
  bio: `"Michael is a short, chubby rodent" <br/>
        - Michael Kim-Sheng <br/><br/>
        "Michael is an important rodent to other lizards in the world"<br/>
        - James Rubino <br/><br/>
        "Michael is a panini lizard" <br/>
        - Keith Stratton <br/><br/>
        "Michael makes music for and with lizards" <br/>
        - Joseph Glaser`,
  isMirror: false
}

const MichaelM = {
  name: "Michael Mansourati",
  bio: `Michael<br/>Is<br/>Cool<br/>Haha<br/>And<br/>Eats<br/>Lemons?<br/><br/>
        sMichael<br/>Also<br/>Never<br/>Saw<br/>Or<br/>Understood<br/>Reasonable<br/>Approaches<br/>To<br/>Introductions`,
  link: "michaelmansourati.com",
  isMirror: false
}

const KeithS = {
  name: "Keith Stratton",
  bio: `Keith Stratton is part of the supposedly sensitive carbon that refreshes the contextual uncertainty of short film short films.
        Its hobbies include folding laundry, MS paint, walking stairs, using sunbathing and reading aids.
        He got acquainted with the headset's earpiece in a cave in South Oss, where he was engaged in field recordings when he was working at that time.
        He is currently living on the ground and can usually find sad calls when he does not ratify Todd Rundgren's memories.<br/><br/>
        Keith Stratton sensitive parts of the claim to be a video background around about the video.
        , And 're the hevend. Yu was not a dray, Hao yo. I'm a GOOD. If he does not agree with the memory of Todd Langlin. <br/><br/>
        Detailed part of the video background argument around Kit Shatan's video.
        , That, its idea. Originally it is not a twist, Hao. I am okay. If he does not agree with Todd Lange 's memory. <br/><br/>
        Particular part of the video argument around the Watt Kit video. Yes, his opinion.
        First of all, it's not casualties, Hao. I'm right. If he does not agree with Todd Lange's memory. <br/><br/>`,
  link: "https://www.soundcloud.com/keithstratton",
  isMirror: false
}

const JamesR = {
  name: "James Rubino",
  bio: `<img src={bio_EC} height="450px"/>`,
  link: "https://www.jamesrubinomusic.com",
  isMirror: false
}

import '../styles/personnel.scss'
import  bio_EC from '../images/bio_EC.svg'
import  Glaser_polaroid from '../images/Glaser_polaroid_compressed.png'
import  Kim_Sheng_polaroid from "../images/Kim_Sheng_polaroid.jpg"
import  Stratton_polaroid from '../images/Stratton_polaroid.jpg'
import Rubino_polaroid from '../images/Rubino_polaroid.png'

const biosArr = [IndiaYG, JosephG, JustinJ, MichaelKS, MichaelM, KeithS, JamesR]

const Bios = () => (
  <div className="bioContainer">
    <div className="bio">
      <img className="bioImage"  alt="image tbd"/>
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
      <img className="bioImage" alt="image tbd" width="200px"/>
      <div className="space25px"></div>
      <div className="bioText">
        <h3 className="name">Justin Jaramillo</h3>
        <p>
          i. i uh. i don’t know. i bang my head against the wall. i don’t know. like music. i don’t know. techno. leon vinyl. good stuff.
          i don’t even know to spell it. it’s like v y n e h a l l. deep house.
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
      <img className="bioImage" alt="image tbd"/>
      <div className="space25px"></div>
      <div className="bioText">
        <h3 className="name">Michael Mansourati</h3>
        <p>
          Michael<br/>
          Is<br/>
          Cool<br/>
          Haha<br/>
          And<br/>
          Eats<br/>
          Lemons?<br/><br/>

          Michael<br/>
          Also<br/>
          Never<br/>
          Saw<br/>
          Or<br/>
          Understood<br/>
          Reasonable<br/>
          Approaches<br/>
          To<br/>
          Introductions
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
)

export default Bios


