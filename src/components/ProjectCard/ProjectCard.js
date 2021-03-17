import React from "react";
import './projectcard.css'
import * as ReactBootStrap from 'react-bootstrap'

class ProjectCard extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="Title">Pack Smart</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <p className="text">
            Pack Smart is a helpful tool for curating perfect packing lists to ease the stress of traveling.
            Just enter your trip details and packing preferences to receive a list made just for you.
            Once your list is created, view items effortlessly with our intuitive, user friendly interface and tailor the list to your specific needs by deleting,
            adjusting the quantity and checking off items as they are packed away. Each packing list is automatically saved to be viewed and edited at any time! With
            Pack Smart, you will never forget important items or over pack again.<br/>
        <ReactBootStrap.Button href="https://github.com/Pack-Smart/pack-smart-be" variant="link">{' '}
          <img src="../images/download.png" alt="Github" width="60" height="40"/>
        </ReactBootStrap.Button>
        <ReactBootStrap.Button href="https://packsmart.herokuapp.com/" variant="link">{' '}
          <img src="../images/heroku_image.jpeg" alt="Heroku" width="60" height="40" />
        </ReactBootStrap.Button>
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default ProjectCard;
