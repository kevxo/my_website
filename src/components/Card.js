import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './card.css'

class Card extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>About Me</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Text>
          <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default Card;
