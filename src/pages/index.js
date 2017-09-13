import React from 'react'
import Link from 'gatsby-link'


import '../styles/index.scss'


const IndexPage = () => (
  <div className="mainContainer">
    <div className="splash">
      <img className="topImage" src="https://i.imgur.com/25o7wqP.jpg"/>
      <p className="downArrow">⌄</p>
    </div>
    <div className="textArea">
      <h1 id="title">ear camera</h1>
      <div className="navigation">
        <Link to="/about/">about</Link>
        <Link to="/media/">media</Link>
        <Link to="/personnel">personnel</Link>
        <Link to="events">events</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
