import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AboutMeContainer from "./container/AboutMe";
import SkillsCard from "./components/SkillCard/SkillsCard"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import { Container } from 'semantic-ui-react'


export default function App() {
  return (
    <Router>
      <div className="the-app">

      <div class="context">
        <h1>Welcome To My Website</h1><br/>
        <AboutMeContainer/><br/>
        <SkillsCard/>
        <Container>
        <h2 class="text-color">Projects</h2>

        </Container><br/><br/>
        <ProjectCard/><br/>
      </div>
        <div class="area" >
        </div >

        <div class="area">
        </div >

        <div class="area">
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >

        <div class="area">
        </div >
        <div class="area">
        </div >
      </div>
    </Router>
  );
}


