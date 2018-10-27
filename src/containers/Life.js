import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I like to Trvales, regardless of photography. Here are some of my recent life:</CenteredHeader>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">

        <div className="col-md-6 col-sm-12">
        <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour5.jpeg')}/>
              <LifeHeader>Beautiful new delhi</LifeHeader>
            </a>
            <p>I've missed the sense of purpose I found in chalking this city</p>
          </div>

        <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour6.png')}/>
              <LifeHeader>Colourful Delhi streets</LifeHeader>
            </a>
            <p>Move your allegiance from your mind to your heart and everything opens up.</p>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>
      
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/delhitour4.png')}/>
              <LifeHeader>Colourful Lodhi area streets</LifeHeader>
            </a>
            <p>I love take a picture in street, because street art makes the world a better place.</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/desk.jpg')}/>
              <LifeHeader>Home cool work desk</LifeHeader>
            </a>
            <LifeProjectBlurb>Home Working desk favorite Sipder man Marvel ps all that inspired me to create new things!</LifeProjectBlurb>
          </div>
        </LifeRow>
        {/*Row 2*/}
        
      </div>
    );
  }
}

export default Life;
