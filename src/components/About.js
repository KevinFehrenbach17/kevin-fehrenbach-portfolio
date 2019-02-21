import React, { Component } from 'react'


export class About extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>

        <div className="card">

        <div className="propic"><img src="https://media.licdn.com/dms/image/C4E03AQFObgLfOisxhg/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=Gc26LejUZNRARsuAOhkwIctIaIr0lx9zQcHTRQTSrRY"
        style={proPic}  />
        </div>
        
        

        <p> A passionate, driven, individual with management experience looking to excel in the programing and web design field. 
            Creative, detail oriented, customer service focused professional. Skilled in teaching and being taught, 
            willing to adapt to new technologies.</p>
        </div>
        
      </div>
    )
  }
}

const proPic ={
    marginTop: '0 auto',
    marginBottom: '0 auto',
    borderRadius: '50%',
    float: 'left',
    borderStyle: 'solid',
    borderColor: '#f4ad42',
    
}





export default About
