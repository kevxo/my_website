import React from "react";
import './projectcard.css'
import * as ReactBootStrap from 'react-bootstrap'
import { Container, Divider, Button, Icon } from 'semantic-ui-react'
import Carousel from '../Carousel/Carousel.js'
import Carousel2 from '../Carousel/Carousel2.js'
import Carousel3 from '../Carousel/Carousel3.js'

class ProjectCard extends React.Component {
  render() {
    return (
        <Container>
          <Carousel/>
          <ReactBootStrap.Card.Title className="Title">Pack Smart</ReactBootStrap.Card.Title>
            <p className="text">
            Pack Smart is a helpful tool for curating perfect packing lists to ease the stress of traveling.
            Just enter your trip details and packing preferences to receive a list made just for you.
            Once your list is created, view items effortlessly with our intuitive, user friendly interface and tailor the list to your specific needs by deleting,
            adjusting the quantity and checking off items as they are packed away. Each packing list is automatically saved to be viewed and edited at any time! With
            Pack Smart, you will never forget important items or over pack again.<br/><br/>
            <Button icon href="https://github.com/Pack-Smart/pack-smart-be">
              <Icon name="github"/>
            </Button>
            <Button icon href="https://packsmart.herokuapp.com/">
              <Icon name="desktop"/>
            </Button>
            </p>
          <Divider />

          <Carousel2/>
          <ReactBootStrap.Card.Title className="Title">Relocate</ReactBootStrap.Card.Title>

            <p className="text">
            Titled Relocate, this application aims to ease the chaos of moving, providing a resource
            for users to discover services in their new hometown. Upon creating an account, users can search a new
            hometown by zip code and browse categories of businesses they need such as different
            utility companies, gyms, parks, and plumbing. Users can also save favorites to their account to revisit businesses of their choice.
            Each business show page displays its phone number, address, and name as well as a link to that business' Yelp page for further information.<br/><br/>
            <Button icon href="https://github.com/Relocate08/Relocate08-Front-End-Rails" >
              <Icon name="github" />
            </Button>
            <Button icon href="https://relocate-front-end-rails.herokuapp.com/">
              <Icon name="desktop" />
            </Button>
            </p>
          <Divider />

          <Carousel3 /><br/><br/>
          <ReactBootStrap.Card.Title className="Title">Austin HQ Weather Charts</ReactBootStrap.Card.Title>
            <p className="text">
            Using a Weather API, I created a Rails application where I collect data from Austin location and retrieve the historical
            and current temperatures. With the use of Fast json, I'm able to build an API where I can call from the Front End. With AJAX
            I can make these calls to the APIs I created and with Highstock I can graph the data collected in two charts. One chart for historical
            weather and current weather, hourly intervals. Next chart chart for historical highs and lows, in 3-hour intervals. I also made use of a
            Postgres with saving historical data. Styling used for the project was Bootstrap. Deployment through Heroku.<br/><br/>
            <Button icon href="https://github.com/kevxo/toolsdev-project-2021-07-09">
              <Icon name="github"/>
            </Button>
            <Button icon href="https://austin-weather-charts.herokuapp.com/">
              <Icon name="desktop"/>
            </Button>
            </p>
            <Divider/>
        </Container>
    )
  }
}

export default ProjectCard;
