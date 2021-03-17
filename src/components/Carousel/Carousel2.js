import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Carousel.css'

class Carousel2 extends React.Component {
  render() {
    return(
      <ReactBootStrap.Carousel fade>
      <ReactBootStrap.Carousel.Item>
      <img
        className="relocate-image"
        src="../images/relocate_demo.gif"
        alt="First slide"
      />
    </ReactBootStrap.Carousel.Item>
  </ReactBootStrap.Carousel>
    )
  }

}

export default Carousel2;
