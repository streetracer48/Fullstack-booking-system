import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Miraz . I'm a software developer based in Dhaka Bangladesh.</CenteredHeader>
        <p>
          I'm comfortable throughout the stack, but my passion lies in the front end, 
          at the intersection of code and design. I currently loved to build software through cool JavaScript library React js.
        </p>
        <p>
          ​Outside of code, I like to create in other ways. From
           photography to travel, long driving , I'm always trying new ways of expressing myself. I also like to meditate, talk to strangers, and run lifestyle experiments.
        </p>
        <p>
           Previously, short time working as fullstack developer at Lynk Bangladesh <a href="https://bd.justlynk.com/" target="_blank">Lynk Bangladesh</a>, I've taught code  to feni computer institute at Students ICT club, served the basic algorithms and c++ basic problem sloving ,  I also hold a 4year diploma engineering  degree in Data telecommunication and network from the Feni computer institute.
        </p>
      </div>
    );
  }
}

export default Home;
