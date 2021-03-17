import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Carousel.css'

class Carousel extends React.Component {
  render() {
    return(
      <ReactBootStrap.Carousel fade>
      <ReactBootStrap.Carousel.Item>
      <img
        className="image"
        src="https://media.giphy.com/media/cvrqtJkhtQYAEmoVNJ/giphy.gif"
        alt="First slide"
      />
    </ReactBootStrap.Carousel.Item>
    <ReactBootStrap.Carousel.Item>
      <img
        className="image"
        src="https://media.giphy.com/media/dQMzzAkeEUvsrMIdlr/giphy.gif"
        alt="Second slide"
      />

    </ReactBootStrap.Carousel.Item>
    <ReactBootStrap.Carousel.Item>
      <img
        className="image"
        src="https://media.giphy.com/media/dQMzzAkeEUvsrMIdlr/giphy.gif"
        alt="Third slide"
      />
    </ReactBootStrap.Carousel.Item>
  </ReactBootStrap.Carousel>
    )
  }

}

export default Carousel;
