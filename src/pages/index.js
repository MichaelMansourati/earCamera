import React from 'react'
import Link from 'gatsby-link'

import '../styles/index.scss'

import transcripts from '../images/transcripts.png'
import ensemble from '../images/ensemble.jpg'

const IndexPage = () => (
  <div className="mainContainer">
    <div className="splash">
      <p className="downArrow">⌄</p>
    </div>
    <div className="contentArea">
      <h1 id="title">ear camera</h1>
      <div className="navigation">
        <Link className="link" to="/about/">about</Link>
        <Link className="link" to="/media/">media</Link>
        <Link className="link" to="/personnel">personnel</Link>
        <Link className="link" to="/events/">events</Link>
        <Link classNAme="lnik" to="/another-thing/">another thing</Link>
      </div>
      <div className="page-goes-here">
        <div className="imgs">
          <img className="description" src={transcripts}/>
          <img className="theBand" src={ensemble}/>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
