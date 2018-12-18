import React, { Component } from 'react'
import styled from 'styled-components'
import * as Icons from "react-icons/fa";
import media from './Media'

const Container = styled.div`
    position: fixed;
    z-index: 99;
    width: 10%;
    ${media.tablet`font-size: 1rem; position: fixed; bottom: 0;`};
    ${media.phablet`font-size: 10px; position: fixed; bottom: 0;`};
    ${media.phone`font-size: 1rem; position: fixed; bottom: 0;`};
    ${media.thone`font-size: 10px; position: fixed; bottom: 0;`};
`
const List = styled.ul`
    list-style-type: none;
    & li {
        margin-bottom: 16px;
        & a {
            text-decoration: none;
            text-decoration: none;
            color: wheat;
            font-size: 1.8em;

            & p {
                font-size: 12px;
                display: inline;
                margin: 0 0 0 20px;
                position: relative;
                bottom: 10px;
                opacity: 0;
            }
            &:hover {
                cursor: pointer;
                filter: brightness(140%);
                & p {
                    opacity: 1;
                }
            }
        }
    }
`

export default class Social extends Component {
  render() {
    return (
      <Container>
        <List>
            <li><a href="https://github.com/onlyserenity"><Icons.FaGithub /><p>GitHub</p></a></li>
            <li><a href="https://www.linkedin.com/in/amjedcha/"><Icons.FaLinkedin /><p>LinkedIn</p></a></li>
        </List>
      </Container>
    )
  }
}
