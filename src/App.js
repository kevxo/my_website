import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

import { Breadcrumb } from 'react-bootstrap'

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
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/">
            <Home />
            <Card />
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
      Kevin David Cuadros

    </h1>
  )
}

function Skills() {
  return <h2>Skills</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Experience() {
  return <h2>Experience</h2>;
}

