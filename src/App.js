import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import ContainerExampleAlignment from "./container/AboutMe";
import SkillsCard from "./components/SkillCard/SkillsCard"
import { Button, Icon, Image, Header } from 'semantic-ui-react'


export default function App() {
  return (
    <Router>
      <div className="the-app">

      <div class="context">
        <h1>Welcome To My Website</h1><br/>
        <ContainerExampleAlignment/><br/>
        <SkillsCard/>
      </div>
        <div class="area" >
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
          </ul>
        </div >

        <div class="area">
        </div >
      </div>
    </Router>
  );
}


