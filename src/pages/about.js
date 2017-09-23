import React from 'react'
import Link from 'gatsby-link'

import '../styles/index.scss'

const about = () => (
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
      <div className="page-goes-here">
        <div className="imgs">
          <img className="description" src="https://i.imgur.com/7wOl0dY.png"/>
          <img className="theBand" src="https://i.imgur.com/Hn4qTke.jpg"/>
        </div>
      </div>
    </div>
  </div>
)

export default about