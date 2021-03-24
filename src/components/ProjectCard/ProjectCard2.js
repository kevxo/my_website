import React from "react";
import './projectcard.css'
import * as ReactBootStrap from 'react-bootstrap'

class ProjectCard2 extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="Title">Relocate</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <p className="text">
            Titled Relocate, this application aims to ease the chaos of moving, providing a resource
            for users to discover services in their new hometown. Upon creating an account, users can search a new
            hometown by zip code and browse categories of businesses they need such as different
            utility companies, gyms, parks, and plumbing. Users can also save favorites to their account to revisit businesses of their choice.
            Each business show page displays its phone number, address, and name as well as a link to that business' Yelp page for further information.<br/>
        <>
        <ReactBootStrap.Button href="https://github.com/Relocate08/Relocate08-Front-End-Rails" variant="link">{' '}
          <img src="../images/download.png" alt="Github" width="60" height="40"/>
        </ReactBootStrap.Button>
        <ReactBootStrap.Button href="https://relocate-front-end-rails.herokuapp.com/" variant="link">{' '}
          <img src="../images/heroku_image.png" alt="Heroku" width="60" height="40" />
        </ReactBootStrap.Button>
        </>
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default ProjectCard2;
