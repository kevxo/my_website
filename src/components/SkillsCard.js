import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './skillscard.css'

class SkillsCard extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>My Skills</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <ul>
              <li>Ruby</li>
              <li>Rails</li>
              <li>ActiveRecord</li>
              <li>RSpec</li>
              <li>TDD</li>
              <li>Restful APIs</li>
              <li>HTML and CSS experience</li>
              <li>Travis CI experience</li>
              <li>Git Workflow</li>
            </ul>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>Currently Exploring</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>FastAPI</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Circle CI</li>
            </ul>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default SkillsCard;
