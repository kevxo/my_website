/* eslint-disable max-len */

import React from 'react'
import { Container, Divider, Image, Button, Icon } from 'semantic-ui-react'
import './AboutMe.css'

const src1 = '../images/98EABFA3-FBC5-4A09-9A3D-B0D8DB5B26F0_1_105_c.png'

const AboutMeContainer = () => (
  <div>
    <Container textAlign='justified'>
      <Image src={src1} size='medium' centered /><br/>
      <h2 class="text-color">About Me</h2>
      <Divider />
      <p class="text-color">
      Hello, My name is Kevin David Cuadros and I'm a Software Developer. Never thought in my life that I would
      be a developer. At first I was pursuing to be a Civil Engineer, but when I graduated from college
      with my Associate's degree it was too late to register for the spring program. In that time I wanted to start my career ASAP, so
      I could help my family. My father is the only one working and he has a lot on his plate. Nothing has been the same since
      my mother had her stroke in 2015. My parents wanted me to learn something in that spring semester of 2020, so I had to find something to
      do. My best friend who is also my mentor recommended me to try coding and see if I liked it. Coding I knew about, but wasn't
      too sure if I'd be good at. I went ahead and attended a "Try Coding Event" in Denver where my friend attended school. Turing School of Software &
      Design was the school. When I got there, I instantly fell in love with the vibe, culture, and teaching techniques. After visiting, I decided to go ahead
      and apply for the 2008 cohort where I would spend 7 months coding and learning about the back end program. I started in August and finished in March 2021,
      where in those 7 months I learned to be fluent in Ruby on Rails and learned to work independently and in a team. My goal right now is to gain experience and
      continue to learn more, so I can keep growing as a developer.
      </p>

      <Divider/>
      <h2 class="text-color">Socials</h2>
      <Button icon href="https://www.linkedin.com/in/kevin-cuadros/">
        <Icon name="linkedin"/>
      </Button>
      <Button icon href="https://github.com/kevxo">
        <Icon name="github"/>
      </Button>
      <Button icon href="https://twitter.com/KevD_9">
        <Icon name="twitter"/>
      </Button>
      <Button icon href="mailto:kev040798@gmail.com">
        <Icon name="mail"/>
      </Button>
      <Divider/>
    </Container>
  </div>
)

export default AboutMeContainer