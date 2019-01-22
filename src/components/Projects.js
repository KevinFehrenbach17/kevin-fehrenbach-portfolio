import React, { Component } from 'react'
import Social from './Social';

export class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>

        <div className= "projCards">
           
        <div className="blockText">
            <a href="https://github.com/KevinFehrenbach17/review-site-again">Reviews Site
            <img src={require('../htmlImage.jpg')} style={images}/>
            </a>
           </div>
            
           <div className="blockText">
            <a href="https://github.com/BeachReport/fleet-tracker">Fleet Tracker
            <img src={require('../reactImage.jpg')} style={images}/>
            </a>
           </div>

            <div className="blockText">
            <a href="https://github.com/KevinFehrenbach17/rss-react">RSS React
            <img src={require('../htmlImage.jpg')} style={images}/>
            </a>
           </div>
            
           <div className="blockText">
            <a href="https://github.com/KevinFehrenbach17/virtual-pet-shelter">Virtual Pet Shelter
            <img src={require('../reactImage.jpg')} style={images}/>
            </a>
           </div>
           
           <div className="blockText">
            <a href="https://github.com/KevinFehrenbach17/virtual-pet">Virtual Pet
            <img src={require('../htmlImage.jpg')} style={images}/>
            </a>
           </div>
            
           <div className="blockText">
            <a href="https://github.com/KevinFehrenbach17/ragequit-network">RageQuit Network
            <img src={require('../reactImage.jpg')} style={images}/>
            </a>
           </div>
            


            </div>

      </div>
    )
  }
}

const images ={
    borderRadius: '17px',
}

export default Projects
