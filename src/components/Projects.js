import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import reddit from '../img/reddit.png'
import Cell from '../img/cell.png'
import Flutter from '../img/flutter.png'
import media from './Media'

const ProjectsList = [
    {
        "title": 'Reddit Client', 
        "name": "Reddictron",
        "moto": "Fast-performance Reddit client",
        "desc": "This application is cross-platform and is currently in the alpha stage. New features are added on a daily-basis.",
        "languages": ["JavaScript", "ReactJs", "ElectronJs"],
        "img": reddit,
        "url": ""
    },
    {
        "title": 'Manufacturing Multi-purpose Application', 
        "name": "Cell Productivity",
        "moto": "Built with details and perfection",
        "desc": "This application is currently under development and it's 99% completed. It features real-time analyatics, order managment and tracking features. It also has in-app messaging system for supervisors and works at workstations and integrated with Workday API to show real-time employee location through out the facility.",
        "languages": ["C#", "MVC", "Microsoft SQL", "API"],
        "img": Cell,
        "url": ""
    },
    {
        "title": 'Cross-platform Weather App', 
        "name": "Flutter Weather",
        "moto": "One code, multiple operation systems",
        "desc": "Weather app developed using Google's newest framework, Flutter. It is designed to target Android and iOS. It uses a free API to fetch weather data and display it to the user.",
        "languages": ["Android", "iOS", "Dart", "Flutter","API"],
        "img": Flutter,
        "url": ""
    },
]

const Main = styled.div`
    animation: fadein 1.4s ease-in;
    @keyframes fadein {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`

const ProjectItem = styled.div`
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    display: flex;
    width: 40%;
    height: 100vh;
    color: #fff;
    transition: width 0.5s ease;

    & .img {
        transform: translate3d(0, 0, 0);
        position: absolute;
        width: 100%; height: 100%;
        top: 0; left: 0;
        background-size: cover;
        background-position: center center;
        transition: filter 0.5s ease;
        filter: blur(3px);
        
    }
    &:before, &:after {
        transform: translate3d(0, 0, 0);
        content: '';
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100%;
    }


    &:before {
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%);
        z-index: 1;
        opacity: 0;
        transform: translate3d(0, 0, 0) translateY(50%);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
        &:before {
            opacity: 1;
            transform: translate3d(0, 0, 0) translateY(0);
            transition: opacity 1s ease, transform 1s ease 0.25s;
        }

        & .content {
            transition: all 0.75s ease 0.5s;
            opacity: 1;
        }
        & .year {
            color: wheat;
        }
        & .img {
            filter: grayscale(0);
        }
    }
`

const ProjectsSlide = styled.div`
    transform: translate3d(0, 0, 0) translateY(25px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 50%;
    opacity: 0;

    h1 {
        font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
        letter-spacing: 4px;
        color: wheat;
        font-size: 1.1rem;
        font-weight: normal;
        ${media.tablet`font-size: 14px;`};
    }

    & ul {
        margin-top: 80px;
        position: relative;
        list-style-type: none;
        display: flex;
        justify-content: center;
    }
    & li {
        letter-spacing: 2px;
        padding: 10px 10px;
        border-radius: 20px;
        width:100px;
        font-size: 12px;
        margin: 0 32px auto 0;
        border: solid wheat 1px;
        ${media.tablet`font-size: 10px;`};
    }
    & p {
        position: relative;
        left: 32%;
        width: 600px;
        text-align: center;
        ${media.tablet`font-size: 8px; width: 160px; left: 25%;`};

    }
`

const Year = styled.div`
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    p {
        font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 1.0rem;
        ${media.tablet`font-size: 16px;`};
        z-index: 1;
        font-size: 2em;
    }
`

export default class Projects extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Main>

        <Slider {...settings} className='slider'>
        {ProjectsList.map((skill, i) => 
                <ProjectItem href={skill.url} key={i}>
                
                    <div className='img' style={{backgroundImage: `url(${skill.img})`}}></div>
                    
                    <Year className="year">
                        <p>{skill.title}</p>
                    </Year>
                
                    <ProjectsSlide className="content">
                        <h1>{skill.name}</h1>
                        <h2>{skill.moto}</h2>
                        <p>{skill.desc}</p>
                        <ul>
                            {skill.languages.map((language, x) =>
                                <li key={x}>{language}</li>
                            )}
                        </ul>
                    </ProjectsSlide>
                </ProjectItem>  
            )}
        </Slider>
      </Main>
    );
  }
}