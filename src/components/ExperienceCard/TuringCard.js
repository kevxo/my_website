import React from 'react'
import './cards.css'
import * as ReactBootStrap from 'react-bootstrap'

class TuringCard extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="Title">Turing School of Software & Design</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <p className="text">
              CERTIFICATE IN BACKEND ENGINEERING |AUG 2020 - MAR 2021<br/>
              Turing students invest more than 1500 hours across seven months in becoming job-ready backend software developers.<br/>
              Relocate is a project where I built the functionality of consuming an API. Helped the Front end to receive the data and display it.<br/>
              Rails Engine is a project, where I built an API with restful endpoints. Incorporated CRUD functionality. Testing all endpoints and having a Front end, hit those endpoints.<br/>
              Monster Shop is a collaborative project, where I built the functionality of adding items to a cart. This helped when a user purchased an item and wanted to add more
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default TuringCard;
