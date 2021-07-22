import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Carousel.css'

class Carousel3 extends React.Component {
  render() {
    return(
      <ReactBootStrap.Carousel fade>
      <ReactBootStrap.Carousel.Item>
        <img
          className="austin-weather-charts"
          src="https://user-images.githubusercontent.com/63522369/126077471-92c59e3b-b827-495f-a86b-2f50012a9286.png"
          alt="Second slide"
          height="80%"
          width="70%"
        />

      </ReactBootStrap.Carousel.Item>
      <ReactBootStrap.Carousel.Item>
      <img
        className="austin-weather-charts"
        src="https://user-images.githubusercontent.com/63522369/126077616-e2b2f630-7c56-4f28-8110-9fbe69eb1961.png"
        alt="Third slide"
        height="80%"
        width="70%"
      />
    </ReactBootStrap.Carousel.Item>
    </ReactBootStrap.Carousel>
    )
  }

}

export default Carousel3;
