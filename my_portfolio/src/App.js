import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'
import Education from './components/Education.js'
import Resume from './components/Resume.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <NavBar/>
        <Profile/>
        <Education />
        <Resume/>
        <Skills/>
        <Projects/>
      </div>
    );
  }
}

export default App;
