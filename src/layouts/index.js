import React from 'react'
import Link from 'gatsby-link'

import '../styles/index.scss'

export default ({ children }) => (
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
      {children()}
    </div>
  </div>
)