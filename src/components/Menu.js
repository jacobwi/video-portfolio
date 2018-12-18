import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import * as Icons from "react-icons/fa";
import media from './Media'

const Sidebar = styled.div`
  width: 6.5%;
  height: 100%;
  background-color: black;
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
  right: 10%;
  outline: none;
  ${media.tablet`display: flex;  margin: 0; text-align: center;`};
  -webkit-tap-highlight-color: transparent;
  & .icon {
    font-size: 1.6em;
    color: wheat;
  }
  & li {

    width: 100%;
    height: 20%;
    ${media.tablet`display: grid; width: 100px; grid-template-columns: 1fr 1fr 1fr 1fr; margin:0; padding:0;`};
    color: white;
    margin-bottom: 40px;
    & p {
      ${media.tablet` width: 100px; padding: 0; margin: 0;`};
      padding: 2px 4px;
      display: none;
      font-size: 12px;

    }

    &:hover {
      
      & .icon {
        
        display: none;
      }
      & .icon_text {
        position: relative;
        right: 22%;
        display: block;
        &:focus {
          outline: none;
        }
      }

    }
  }
`

const CustomLink = styled(Link)`

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
            <CustomLink to='/background'><li><Icons.FaToolbox className="icon"/><p className="icon_text">Exp.</p></li></CustomLink>
            <CustomLink to='/projects'><li><Icons.FaProjectDiagram className="icon"/><p className="icon_text">Projects</p></li></CustomLink>
          </List>
        </Sidebar>
      </div>
    )
  }
};

export default Menu;