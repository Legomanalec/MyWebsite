import React from 'react';
import "./Navigation.css";

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <NavLink id="home" to="/">
            <span id="name">Alec R. Meyer</span>
          </NavLink>

          <NavLink id="about" to="/about">
            <button id="about" class="button">
              <span>About</span>
            </button>
          </NavLink>

          <NavLink id="contact" to="/contact">
            <button id="contact" class="button">
              <span>Contact</span>
            </button>
          </NavLink>

          <NavLink id="workExperience" to="/workExperience">
            <button id="workExperience" class="button">
              <span>Work Experience</span>
            </button>
          </NavLink>

          <NavLink id="projects" to="/projects">
            <button id="projects" class="button">
              <span>Projects</span>
            </button>
          </NavLink>
       </div>
    );
}

export default Navigation;
