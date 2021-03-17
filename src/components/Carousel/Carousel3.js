import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Carousel.css'

class Carousel3 extends React.Component {
  render() {
    return(
      <ReactBootStrap.Carousel fade>
      <ReactBootStrap.Carousel.Item>
        <img
          className="viewing-party-image"
          src="https://user-images.githubusercontent.com/63476564/101776107-72412000-3abe-11eb-840b-5ce7170ef0fe.png"
          alt="Second slide"
          height="10%"
          width="14%"
        />

      </ReactBootStrap.Carousel.Item>
      <ReactBootStrap.Carousel.Item>
      <img
        className="viewing-party-image"
        src="https://user-images.githubusercontent.com/63476564/101782315-d962d280-3ac6-11eb-83c8-5c84a7de2679.png"
        alt="Third slide"
        height="10%"
          width="14%"
      />
    </ReactBootStrap.Carousel.Item>
    </ReactBootStrap.Carousel>
    )
  }

}

export default Carousel3;
