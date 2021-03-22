import React from 'react'
import './cards.css'
import * as ReactBootStrap from 'react-bootstrap'


class PolloTropicalCard extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="Title">Pollo Tropical</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <p className="text">
              RESTAURANT | OCT 2016 - AUG 2018
              As a cashier, learned to interact with customers.<br/>
              Customer satisfaction increased 25%.<br/>
              Learned to resolve conflicts with customers.<br/>
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default PolloTropicalCard;
