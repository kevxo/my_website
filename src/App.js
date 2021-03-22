import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import SkillsCard from './components/SkillCard/SkillsCard'
import Carousel from './components/Carousel/Carousel'
import Carousel2 from './components/Carousel/Carousel2'
import Carousel3 from './components/Carousel/Carousel3'
import ProjectCard from './components/ProjectCard/ProjectCard'
import ProjectCard2 from './components/ProjectCard/ProjectCard2'
import ProjectCard3 from './components/ProjectCard/ProjectCard3'
import AboutCard from './components/AboutCard/AboutCard'
import TuringCard from './components/ExperienceCard/TuringCard'
import FordsGarageCard from './components/ExperienceCard/FordsGarageCard'
import PolloTropicalCard from './components/ExperienceCard/PolloTropicalCard'

import { Breadcrumb, Button } from 'react-bootstrap'


export default function App() {
  return (
    <Router>
      <div className="the-app">
        <Navbar>
          <Breadcrumb>
            <Breadcrumb.Item>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/skills">
            <Skills />
            <img className="skill-photo" src="../images/technicalskills.png" alt="technical skills"  height="30%" width="30%"/>
            <SkillsCard/>
          </Route>
          <Route path="/projects">
            <Projects />
            <Carousel />
            <ProjectCard/>
            <Carousel2 />
            <ProjectCard2/>
            <Carousel3 />
            <ProjectCard3/>
          </Route>
          <Route path="/experience">
            <Experience />
            < img className="photo" src="../images/EHdy1GyV.png" alt="Turing" height="20%" width="20%"/>
            <TuringCard />
            < img className="fords-photo" src="../images/fordsgarage.jpeg" alt="Fords Garage" height="20%" width="20%"/>
            <FordsGarageCard />
            < img className="pollo-photo" src="../images/pollotropical.png" alt="Pollo Tropical" height="20%" width="20%"/>
            < PolloTropicalCard />
          </Route>
          <Route path="/">
            <Home />
            <AboutCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <h1 className="my-intro">
      Welcome To My Website<br/>
      Software Engineer<br/>
      <img className="my-photo" src='../images/98EABFA3-FBC5-4A09-9A3D-B0D8DB5B26F0_1_105_c.jpeg' alt='myself' width='250' height='250'/><br/>
      Kevin David Cuadros<br/>
      <Button href="https://github.com/kevxo" variant="link">{' '}
        <img src="../images/download.png" alt="Github" width="60" height="40"/>
      </Button>
      <Button href="https://www.linkedin.com/in/kevin-cuadros/" variant="link">{' '}
        <img src="../images/downloadlinkedin.png" alt="LinkedIn" width="60" height="40"/>
      </Button>
    </h1>
  )
}

function Skills() {
  return <h1 className="skills-intro">Skills</h1>;
}

function Projects() {
  return <h1 className="projects-intro">Projects</h1>;
}

function Experience() {
  return <h1 className="experience-intro">Experience</h1>;
}

