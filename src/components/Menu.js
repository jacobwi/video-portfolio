import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import * as Icons from "react-icons/fa";
import media from './Media'

const Sidebar = styled.div`
  width: 6.5%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  animation: fadein 1s ease-out;
  ${media.tablet`position: fixed;
  top: 0;  height: 10%; width: 100%; font-size: 14px; text-align: center;`};
  @keyframes fadein {
    from {right: -210px;}
    to {right: 0px;}
  }
  
`

const List = styled.ul`
  list-style-type: none;
  position: relative;
  top: 20%;
  left: 10%;
  outline: none;
  ${media.tablet`display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; right: 4%;`};
  -webkit-tap-highlight-color: transparent;
  & .icon {
    color: wheat;
  }
  & li {
    font-size: 2rem;
    width: 100%;
    height: 20%;
    ${media.tablet`font-size: 1.8em;  padding:0; `};
    color: white;
    margin-bottom: 40px;
    & p {
      ${media.tablet` left:10%;  padding: 0 0 0 0; margin: 0; `};
      display: none;
      font-size: 18px;
    }

    &:hover {
      
      & .icon {
        
        display: none;
      }
      & .icon_text {
        animation: fadein 1s ease-out;
        position: relative;
        right: 18%;
        display: block;
        &:active {
          outline: none;
        }
      }
    }
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({menuToggle: !this.state.menuToggle});
  }
  render() {
    return (
      <div>
        <Sidebar>
          <List>
            <CustomLink to='/'><li><Icons.FaHome className="icon"/><p className="icon_text">Home</p></li></CustomLink>
            <CustomLink to='/about'><li><Icons.FaUser className="icon"/><p className="icon_text">About</p></li></CustomLink>
            <CustomLink to='/background'><li><Icons.FaToolbox className="icon"/><p className="icon_text">Exper.</p></li></CustomLink>
            <CustomLink to='/projects'><li><Icons.FaProjectDiagram className="icon"/><p className="icon_text">Projects</p></li></CustomLink>
          </List>
        </Sidebar>
      </div>
    )
  }
};

export default Menu;