import React from "react";
import './projectcard.css'
import * as ReactBootStrap from 'react-bootstrap'

class ProjectCard3 extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="Title">Viewing Party</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <p className="text">
            Viewing party is an application in which users can explore movies, add friends, and
            create parties to watch movies together! Users can search for a specific movie or they can explore a list of the current top movies.
            A user can click on a chosen movie's title to be taken to a details page to learn more about that movie including information about
            the runtime, genre, cast members, and reviews. Once a user has chosen a movie, and selected friend's they would like to invite, the
            user can create a viewing party on a given date, at a specific start time, and for a given duration!<br/>
        <ReactBootStrap.Button href="https://github.com/kevxo/viewing_party" variant="link">{' '}
          <img src="../images/download.png" alt="Github" width="60" height="40"/>
        </ReactBootStrap.Button>
        <ReactBootStrap.Button href="https://viewing-party-2008.herokuapp.com/" variant="link">{' '}
          <img src="../images/heroku_image.jpeg" alt="Github" width="60" height="40"/>
        </ReactBootStrap.Button>
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default ProjectCard3;
