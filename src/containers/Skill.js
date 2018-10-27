import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";



export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;



class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)(ES7)</li>
                <li>React</li>
                <li>Redux</li>
                <li>Vue</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>Bootstrap 4</li>
                <li>Material-UI</li>
                <li>Semantic-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>PHP</li>
                <li>SQL/NoSQL</li>
                <li>MongoDB</li>
                
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
              <li>C++</li>
              <li>Alogrithms</li>
              <li>Web architecture</li>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Rest API</li>
                <li>Jest & enzyme Testing</li>
                <li>Photography</li>
                <li>Driving</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          
        </div>
      </div>
    );
  }
}

export default Code;
