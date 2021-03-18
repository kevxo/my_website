import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './aboutcard.css'

class AboutCard extends React.Component {
  render() {
    return (
      <ReactBootStrap.Card className="card">
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title className="title">About Me:</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text className="text">
          <p className="about-me">
              Spring of 2020 I wasn’t too sure what I wanted to do with my life. Graduating college I kept asking myself, “What’s Next?”. I wanted to start my career as soon as possible and the reason was to help my parents. My dad was the only one providing income in the household because of my mom getting a stroke in 2015 she couldn’t help like back then.
              Seeing my father stressed out and overwhelmed I wanted to help. Working in the restaurant business wasn’t enough and I needed to find a better path.
              During the spring of 2020 I decided not to go to a four year University. My mind was set to try something new! My older brother who works QA and my best friend who is a software developer recommended me to try coding. I knew my best friend went to a coding bootcamp back in 2017 and now he’s a successful individual with his new career.
              Best friend advised me to try “Turing School of Software & Design”, and I went to an event of thiers in Denver. Not knowing how to write a single line of code I went to the event where I got to know the campus and meet the amazing instructors. I instantly fell in love with the culture and their teaching styles. I made my decision to attend the boot camp in August 2020.
              The program would be 7 months which is a lot quicker than 4 years and I	 would have my best friend to mentor me who is an experienced developer. I knew that this was a great opportunity that I needed to take. In my 7 months in Turing I learned to be fluent in Ruby and create applications on Rails. I got to work solo and in teams, where I learned to problem solve on my own and collaborate with a
              team to create awesome applications. Spring of 2021 I graduated from Turing and now the only thing ahead is to find a job, where I can start helping my parents and setting up my career. I’m eager to learn new technologies and grow as a developer. Looking forward to making an impact in this world to help the communities that I’m part of.<br/>
            </p>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )
  }
}

export default AboutCard;
