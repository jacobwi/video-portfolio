import React, { Component } from 'react'
import styled from 'styled-components'
import Aboutback from '../backgrounds/about.mp4'
import AboutbackWeb from '../backgrounds/about.webm'
import media from './Media'

const Main = styled.div`  
  & .video {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    object-fit: cover;
  }
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%; 
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

const Header = styled.div`
  color: wheat;
  margin: 0 auto;
  border-radius: 40px;
  width: 60%;
  animation: fadein 1.4s ease-in;
  @keyframes fadein {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  & h1 {
    padding: 40px 0 0 0;
    font-size: 3.5em;
    position: relative;
	  text-align: center;
    margin-top: 100px;
    ${media.tablet`font-size: 12px;`};
    ${media.phablet`font-size: 12px;`};
    ${media.phone`font-size: 12px;`};
    ${media.thone`font-size: 12px; `};

  }
  & h2 {
    color: #C79F5B;
    text-align: center;
    ${media.tablet`font-size: 12px;`};
    ${media.phablet`font-size: 12px;`};
    ${media.phone`font-size: 12px;`};
    ${media.thone`font-size: 12px; `};
  }
  & p {
    padding: 20px;
    padding-bottom: 80px;
    ${media.tablet`font-size: 12px; width: 120px; `};
    ${media.phablet`font-size: 12px;`};
    ${media.phone`font-size: 12px;`};
    ${media.thone`font-size: 12px; `};
  }
`

const Languages = styled.div`
  color: wheat;
  margin: 0 auto;
  border-radius: 40px;
  width: 50%;
  animation: fadein 1.4s ease-in;
  @keyframes fadein {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  & h1 {
    padding: 40px 0 0 0;
    font-size: 3.5em;
    position: relative;
	  text-align: center;
    margin-top: 100px;
    ${media.tablet`font-size: 18px;`};
    ${media.phablet`font-size: 16px;`};
    ${media.phone`font-size: 14px;`};
    ${media.thone`font-size: 12px; `};
    
  }

  & h2 {
    ${media.tablet`font-size: 18px;`};
    ${media.phablet`font-size: 16px;`};
    ${media.phone`font-size: 14px;`};
    ${media.thone`font-size: 12px; `};
  }
  & p {
    ${media.tablet`font-size: 18px;`};
    ${media.phablet`font-size: 16px;`};
    ${media.phone`font-size: 14px;`};
    ${media.thone`font-size: 12px; `};
  }
`

export default class About extends Component {
  render() {
    return (
      <Main>
        <Header>
            <h1>Hey World🌏 , my name is</h1>
            <h2>Jacob William</h2>
            <p>
              I'm a software engineer who's passionate for innovative technology and digital content. My main focus is to build clean code and use advanced algorithms to deliver the best user-experience apps with high performance. 
            </p>
        </Header>
        <Languages>
           <h1>What I Do</h1>
           <h2>Front-end</h2>
           <p>HTML, CSS, Javascript, ES6, React, Gatsby, Vue.js</p>

           <h2>Back-end</h2>
           <p>NodeJS, C#, Flusk, ASP.NET </p>

           <h2>Apps</h2>
           <p>Android Java, iOS Swift, React Native, Electron, Flutter</p>

           <h2>Database</h2>
           <p>Microsoft SQL, MySQL, NoSQL, Firebase</p>

           <h2>Languages</h2>
           <p>C#, Java, Python, C++, Swift, Dart</p>
        </Languages>
        <video autoPlay loop className="video"> 
            <source src={Aboutback} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src={AboutbackWeb} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </Main>
    )
  }
}
