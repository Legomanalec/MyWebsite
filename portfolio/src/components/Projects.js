import React from 'react';
import Collapsible from 'react-collapsible';
const Projects = () => {
    return (
       <div>
          <h1>Projects</h1>

          <Collapsible trigger="Go! Game">
            <p>Online app to play Go! with your friends</p>
            <p>JavaScript, ReactJS, Socket.io, MySQL, HTML/CSS</p>
          </Collapsible>

          <Collapsible trigger="Planner App">
            <p>A simple app to keep track of your time</p>
            <p>JavaFX, MySQL</p>
          </Collapsible>

       </div>
    );
}

export default Projects;
