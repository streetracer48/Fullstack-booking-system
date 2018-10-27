import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { ColorScheme } from "../theme/styleConstants";

const Date = styled.p`
  font-size: 12px;
`

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;


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

class Writing extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Recent learning based work:</CenteredHeader>
        <PortRow>
            <a href="https://align.fun/" target="_blank">
              <CodeThumbnail src={require("../assets/hoffyevents.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Hoffyevent</PortTitle>
                <PortButtonContainer>
                  <PortButton href="" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-Hoffyevents-react-redux"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                My capstone project from the Grace Hopper Program, Align is a web
                application for setting and managing long-term goals with a
                beautiful and intuitive interface. It includes image uploading
                capability, resource cards to save helpful links, a rich text
                editor, and live updating using Firebase WebSocket integration.
            </PortDescription>
              <PortDescription>
                I worked with two incredibly smart teammates to create Align in
              three weeks. You can read about our process building it{" "}
                <a href="">
                  here
              </a>.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Firebase</UsedItem>
                <UsedItem>Semantic-UI</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="" target="_blank">
              <CodeThumbnail src={require("../assets/myburger.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Myburger</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://react-myburger-miraz.firebaseapp.com" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/FullStack-MyBurger-React.Redux"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                My capstone project from the Grace Hopper Program, Align is a web
                application for setting and managing long-term goals with a
                beautiful and intuitive interface. It includes image uploading
                capability, resource cards to save helpful links, a rich text
                editor, and live updating using Firebase WebSocket integration.
            </PortDescription>
              <PortDescription>
                I worked with two incredibly smart teammates to create Align in
              three weeks. You can read about our process building it{" "}
                <a href="">
                  here
              </a>.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Firebase</UsedItem>
                <UsedItem>Material-UI</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://okcollab.herokuapp.com/" target="_blank">
              <CodeThumbnail
                src={require("../assets/emailsurvey.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Blitz</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href=""
                    target="_blank"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/FullstackBlitz-VisaCardBilling-TestMode"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                For my hackathon project at Grace Hopper, I spent three days
                building an app I always wished I'd had -- a social network for
                musicians to find other musicians to collaborate with. It's like
                OkCupid, except instead of dates it's for finding people to jam
                with and make tracks. View all users, view each user's profile and
                information, play their embedded Youtube videos, and see similar
                users in the sidebar.
            </PortDescription>
              <PortDescription>
                OkCollab is responsive and works on devices of all sizes. You can
              watch me present it live{" "}
                <a
                  href=""
                  target="_blank"
                >
                  here
              </a>.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Passport JS</UsedItem>
                <UsedItem>MongoDB</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Node.JS</UsedItem>
                <UsedItem>Express</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Material-UI</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://limitless-leggings.herokuapp.com/" target="_blank">
              <CodeThumbnail
                src={require("../assets/blog.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>FullStack blog</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-blog-react"
                    target="_blank"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-blog-react"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Limitless Leggings is a full-stack e-commerce site built from
                scratch. It includes products filterable by category; working
                signup, login, and o-auth capabilities; and a working cart model
                built in PostgreSQL.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>PHP</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            <a href="https://limitless-leggings.herokuapp.com/" target="_blank">
              <CodeThumbnail
                src={require("../assets/robot.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>RoboFriend</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/robo-interactive-react"
                    target="_blank"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-blog-react"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Limitless Leggings is a full-stack e-commerce site built from
                scratch. It includes products filterable by category; working
                signup, login, and o-auth capabilities; and a working cart model
                built in PostgreSQL.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>PHP</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            <a href="https://limitless-leggings.herokuapp.com/" target="_blank">
              <CodeThumbnail
                src={require("../assets/portfolio.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>ReactPortfolio</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/robo-interactive-react"
                    target="_blank"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-blog-react"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Limitless Leggings is a full-stack e-commerce site built from
                scratch. It includes products filterable by category; working
                signup, login, and o-auth capabilities; and a working cart model
                built in PostgreSQL.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>PHP</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
      </div>
    );
  }
}

export default Writing;
