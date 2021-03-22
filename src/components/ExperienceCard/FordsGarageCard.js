import React from 'react'
import './cards.css'
import * as ReactBootStrap from 'react-bootstrap'

class FordsGarageCard extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="Title">Fords Garage</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <p className="text">
              RESTAURANT | AUG 2018 - JUNE 2020<br/>
              As a line cook, I helped to make and send entrees in a timely manner.<br/>
              Learned to multitask and work in a team.<br/>
              Worked more than one position on the line.<br/>
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default FordsGarageCard;
