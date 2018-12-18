import React, { Component } from 'react'
import styled from 'styled-components'
import Road from '../backgrounds/Road-candies.mp4'
import WebRoad from '../backgrounds/Road-candies.webm'
import media from './Media'
const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  & .video {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    object-fit: cover;
  }

`

const Header = styled.div`
align-self: center;
  width: 40%;
  padding: 10px 40px;
  color: wheat;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 40px;
  animation: fadein 1.4s ease-in;
  margin: 0 auto;
  @keyframes fadein {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  & h1 {
    ${media.tablet`font-size: 16px;`};
    ${media.phablet`font-size: 16px;`};
    ${media.phone`font-size: 14px;`};
    ${media.thone`font-size: 14px; `};
	  text-align: center;
    margin-top: 100px;
  }
  & h2 {
    ${media.tablet`font-size: 12px;`};
    ${media.phablet`font-size: 10px;`};
    ${media.phone`font-size: 8px;`};
    
    color: #C79F5B;
    text-align: center;
    padding-bottom: 40px;

  }
`

const ResumeButton = styled.button`
  outline: none;
  background: transparent;
  display: block; 
  width: 140px;
  margin: 0 auto; 
  position: sticky;
  border: solid 1px;
  border-color: #C79F5B;
  color: #C79F5B;
  padding: 10px 16px 10px 16px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    -webkit-transition: background-color 1s ease-out;
    -moz-transition:  background-color  1s ease-out;
    -o-transition:  background-color  1s ease-out;
    transition:  background-color  1s ease-out;
    background-color: rgba(199, 159, 91, 0.4);
  }

  ${media.tablet`font-size: 12px;`};
  ${media.phablet`font-size: 12px;`};
  ${media.phone`font-size: 12px;`};
  ${media.thone`font-size: 10px; `};
`
export default class Home extends Component {
  render() {
    return (
      <AboutContainer>
        <Header>
          <h1>Jacob William</h1>
          <h2>Software Engineer + UI Designer</h2>
          <ResumeButton>Resume</ResumeButton>
        </Header>
        <video autoPlay loop className="video"> 
            <source src={Road} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src={WebRoad} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </AboutContainer>
    )
  }
}
