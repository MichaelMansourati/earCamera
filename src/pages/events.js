import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'
import Title from '../components/title.js'

import '../styles/events.css'

const events = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <Title/>
      <Navbar/>
      <div className="page-goes-here">
        <div className="event-wrapper">
        <h2>Past Events</h2>
          <div className="event">
            <h3>Friday, October 13th 2017</h3>
            <p>
              <strong>Body Language</strong><br/>
              <strong>Language Corporel</strong>
            </p>
            <p>
              Psychic City // portes 19h | 7pm doors, concert 20h | 8pm show // BYOB // $5 ou | or PWYC
            </p>
            <p>
            __________
            </p>
            <p>
            A set of works that explore bodies, space, and togetherness.<br/>
            Featuring two works by <a href="http://www.amnonwolman.org/">Amnon Wolman</a> and new works by <a href="https://indiayeshe.com/">India Gailey</a> and <a href="http://www.jglasermusic.com/">Joseph Glaser</a>
            </p>
            <p>
            | | |
            </p>
            <p>
              Un ensemble de pièces qui explore le corps humain, les lieux et l'unité.<br/>
              Une présentation de deux pièces par <a href="http://www.amnonwolman.org/">Amnon Wolman</a> et des créations par <a href="https://indiayeshe.com/">India Gailey</a> et <a href="http://www.jglasermusic.com/">Joseph Glaser</a>
            </p>
            <p>
              __________
            </p>
            <p>
              N.B. la salle est seulement accessible par escalier. | the space is only accessible by stairs.<br/>
              C.W. cet événement contient de la nudité | the show contains nudity
            </p>
            <p>
              <a href="https://www.facebook.com/events/171252370089029/">facebook</a>
            </p>
          </div>
          <div className="event">
            <h3>Sunday, May 21st, 2017</h3>
            <p>
              <strong>Better Way of Life</strong>
            </p>
            <p>
              Le Cagibi, 5490 St. Laurent // portes 20h | 8pm doors, concert 20h30 | 8:30 show // $5 ou | or PWYC
            </p>
            <p>
              __________
            </p>
            <p>
              The inaugural concert of Ear Camera. Works that probe the boundaries of genre.
            </p>
            <p>
              Works include:
              <br />
              <a href="https://soundcloud.com/noa-haran">Noa Haran</a>: Millennial Dialogue
              <br />
              <a href="https://www.soundcloud.com/keithstratton">Keith Stratton</a>: Empathy Manoeuvre #1
              <br />
              Michael Pisaro: Tombstones
            </p>
            <p>
              <a href="https://www.facebook.com/events/1662996830394909/?ti=cl">facebook</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default events
