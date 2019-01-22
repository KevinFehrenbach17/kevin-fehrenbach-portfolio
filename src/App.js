import React, { Component } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';

import Particles from 'react-particles-js';

import './App.css';

const particleOpt = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
        
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="partBack">
              <Particles 
              params={particleOpt}
              />
         </div> 

         <About />
         <Skills />
         <Projects />
         <Social />

      </div>
    );
  }
}

export default App;
