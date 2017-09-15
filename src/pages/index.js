import React from 'react'
import Link from 'gatsby-link'


import '../styles/index.scss'


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
        <div className="textArea">
          <h3>Lorem ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="exampleImage">
          <img className="theBand" src="https://i.imgur.com/Hn4qTke.jpg"/>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
