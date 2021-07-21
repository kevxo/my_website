import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './aboutcard.css'

class AboutCard extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="title">About Me:</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text className="text">
          <p className="about-me">
              <br/>
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default AboutCard;
