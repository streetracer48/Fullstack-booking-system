import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { ColorScheme } from "../theme/styleConstants";


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
            <a rel="noopener noreferrer" href="https://align.fun/" target="_blank">
              <CodeThumbnail src={require("../assets/hoffyevents.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Hoffyevent</PortTitle>
                <PortButtonContainer>
                  <PortButton rel="noopener noreferrer" href="https://github.com/streetracer48/Fullstack-Hoffyevents-react-redux/blob/master/README.md" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-Hoffyevents-react-redux"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
             this is  my learning based project done 90% work, I always wished I'd had -- a social network for event publishing to find other event publisher  to collaborate with. It's like Hoffyevent, except instead of dates it's for finding event location to city with and make tracks. View all users, view each user's profile and information,  see similar users in the sidebar. this is also can track users activity, It includes image uploading
                capability,

* Login and Register functionality using Firebase authentication
* Adding social login for Facebook and Google into the application
*  Google maps and Places autocomplete integration
* Photo uploading using drag and drop, with resizing and cropping of the images before upload
* Adding a live chat system
* Paging, Sorting and Filtering with Firestore
* Firestore database design
* Creating reusable form components with Redux forms
* Building a application with Semantic UI
* Many more things as well
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
                  <PortButton rel="noopener noreferrer" href="https://react-myburger-miraz.firebaseapp.com" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/FullStack-MyBurger-React.Redux"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              The Myburger  which is an amazing fullstack application utilizing all the React js concepts
             and live updating using Firebase  integration. my burger built from scratch. It includes, firebase working signup, login, capabilities;
             Styling of React components
A deep dive into the internals of React and advanced component features
How to access Http content from within React apps,
Redux ... from basics to advanced!
Forms and form validation in React apps
Authentication  more
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
            <a href="" target="_blank">
              <CodeThumbnail
                src={require("../assets/emailsurvey.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Blitz</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/FullstackBlitz/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/FullstackBlitz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
               Email survey, this is simple fullstack web based apps, where people can survey their picnic, events compegin 
            </PortDescription>
              <PortDescription>
              Blitz is responsive , know more here{" "}
                <a
                  href="https://github.com/streetracer48/FullstackBlitz/blob/master/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <a href="" target="_blank">
              <CodeThumbnail
                src={require("../assets/metaadmin.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>interactive metaAdmin</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://streetracer48.github.io/interactive-metaAdmin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/interactive-metaAdmin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              Responsive interactive-metaAdmin this is my learning based project done 100% work
            </PortDescription>
              <PortDescription>
              Meta admin  is responsive , know more here{" "}
                <a
                  href="https://streetracer48.github.io/interactive-metaAdmin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
              </a>.
            </PortDescription>
              <UsedList>
                <UsedItem>Material-UI</UsedItem>
                <UsedItem>Font-Awsome</UsedItem>
                <UsedItem>Google-fonts</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Canvas js</UsedItem>
                <UsedItem>Jquery</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>

  <hr />
          <PortRow>
            <a href="" target="_blank" rel="noopener noreferrer">
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
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-blog-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
             this is full functional fullstack blog built from scratch where people can writing blog post,  View all users, view each user's profile , filterable by category; working signup, login,capabilities;
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
            <a href="" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail
                src={require("../assets/manhester.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Manchester-CityFC-Project</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/Manchester-CityFC-Project/Football-React/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/Manchester-CityFC-Projectt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              Manchester City Football Club, commonly known as Man. City, is a football club in Manchester, England. however this is my learning based project
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Firebase</UsedItem>
                <UsedItem>Material - UI</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>HTML</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
           <PortRow>
            <a href="" rel="noopener noreferrer" target="_blank">
              <CodeThumbnail
                src={require("../assets/travel.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>travel application</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://streetracer48.github.io/playing-with-materialize-css/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/playing-with-materialize-css"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              this is simple material-ui Travel agency front-end  application
            </PortDescription>
              <UsedList>
                <UsedItem>Material-UI</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            <a href="" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail
                src={require("../assets/expensify.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Expensify</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/Expensify-react/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Expensify-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
             Expensify where people easly note their expens coming more soon ....
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Airbnb Datepicker</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>HTML</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            <a href="" rel="noopener noreferrer" target="_blank">
              <CodeThumbnail
                src={require("../assets/cloud1.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>CloudV9</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://streetracer48.github.io/playing-with-materialize-css/cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/playing-with-materialize-css/tree/master/cloud"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                this is simple cloud business  based  Material-UI front-end website 100% done 
            </PortDescription>
              <UsedList>
                <UsedItem>Material-UI</UsedItem>
                <UsedItem>Google Fonts</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            
            <a href="" rel="noopener noreferrer" target="_blank">
              <CodeThumbnail
                src={require("../assets/ecommerece.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle> Ecommerece Online shopping store</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-ecommerce-react/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/Fullstack-ecommerce-react"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                this is simple ecommerec learning based project where people can order from Online More details coming soon
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Express js</UsedItem>
                <UsedItem>MongoDB</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>HTML</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            <a href="" rel="noopener noreferrer" target="_blank">
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
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href=""
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                this is simple interactive robot searchEngine used React js AND hashrobot
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            <a href="" rel="noopener noreferrer" target="_blank">
              <CodeThumbnail
                src={require("../assets/blizz2.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Blizz</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://streetracer48.github.io/playing-with-materialize-css/Blitz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/playing-with-materialize-css/tree/master/Blitz"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                this is simple Landing UI Front-end based 100%work
            </PortDescription>
              <UsedList>
                <UsedItem>Material-UI</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
 
          <hr/>
          <PortRow>
            <a href="" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail
                src={require("../assets/moviedb.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Movie Search Engine</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/reactapimovieesearchengine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/reactapimovieesearchengine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
               this is simple interactive movie search Engine used movies database api
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>API</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr/>
          <PortRow>
            <a  rel="noopener noreferrer" href="" target="_blank">
              <CodeThumbnail
                src={require("../assets/portfolio.png")}
              />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>ReactPortfolio</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/streetracer48/react-awsome-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/streetracer48/react-awsome-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              this is awsome react portfolio using MaterialCSS , react and react-router
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>React-router</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
      </div>
    );
  }
}

export default Writing;
