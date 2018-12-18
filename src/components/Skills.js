import React, { Component } from 'react'
import styled from 'styled-components'
import SNHU from '../img/snhu.jpg'
import Aclara from '../img/aclara.jpg'
import OLE from '../img/ole.jpg'
import media from './Media'

const SkillsList = [
    {"year": '2017 - Present', 
    "name": "Southern New Hampshire University",
    "title": "B.S in Computer Science",
    "desc": ["Concentration in Software Engineering", "3.6 GPA"],
    "img": SNHU,
    "url": "https://www.snhu.edu/"
    },
    {"year": 'May 2018 - July 2018', 
    "name": "Open Learning Exchange",
    "title": "Software Engineering Intern",
    "desc": ["Front and back ends projects", "GitHub", "Android", "Java", "Code Reviews"],
    "img": OLE,
    "url": "https://www.ole.org/"
    },
    {"year": 'Nov 2018 - Present', 
    "name": "Aclara",
    "title": "Software Engineering Intern",
    "desc": ["Front and back ends projects", "Microsoft SQL 2017", "API implementation", "Micrsoft DevOps", "C#", "ASP.NET MVC"],
    "img": Aclara,
    "url": "https://www.aclara.com/"
    },
    
]

const Main = styled.div`
    animation: fadein 1.4s ease-in;
    @keyframes fadein {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    z-index: 1;
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #031625;
    padding: 0 70px 0 0;

`
const TimelineItem = styled.a`
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    position: relative;
    width: 40%;
    height: 100vh;
    min-height: 600px;
    color: #fff;
    overflow: hidden;
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

    &:after {
        
        opacity: 1;
        transition: opacity 0.5s ease;
    }

    &:before {
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%);
        z-index: 1;
        opacity: 0;
        transform: translate3d(0, 0, 0) translateY(50%);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
        width: 60% !important;
        
        &:after {
        opacity: 0;
        }

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

const TimelineContent = styled.div`
    transform: translate3d(0, 0, 0) translateY(25px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 50%;
    opacity: 0;
    ${media.tablet`font-size: 8px;`};
    h1 {
        font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
        text-transform: uppercase;
        color: wheat;
        font-size: 1.1rem;
        font-weight: normal;
    }
    & ul {
        list-style-type: none;
    }
    & li {
        margin-bottom: 10px;
        &:before {
            content: '▹';
            color: wheat;
            font-size: 18px;
            position: absolute;
            left: 20px;
        }
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
    font-size: 1.0rem;
    ${media.tablet`font-size: 8px;`};
    p {
        font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
        line-height: 0;
        z-index: 1;
    }
`


export default class Skills extends Component {
  render() {
    return (
        <Main>
            {SkillsList.map((skill, i) => 
                <TimelineItem href={skill.url} key={i}>
                
                    <div className='img' style={{backgroundImage: `url(${skill.img})`}}></div>
                    
                    <Year className="year">
                        <p>{skill.year}</p>
                    </Year>
                
                    <TimelineContent className="content">
                        <h1>{skill.name}</h1>
                        <h2>{skill.title}</h2>
                        <ul>
                            {skill.desc.map((desc, x) =>
                                <li key={x}>{desc}</li>
                            )}
                        </ul>
                    </TimelineContent>
                </TimelineItem>  
            )}
        </Main>
    )
  }
}
