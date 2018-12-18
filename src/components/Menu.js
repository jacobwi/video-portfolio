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

  ${media.tablet`display: flex; text-align: center;`};
  
  & .icon {
    font-size: 1.6em;
    color: wheat;

  }
  & li {
    width: 100%;
    height: 20%;
    ${media.tablet`display: flex; margin-left: 80px;text-align: center;`};
    color: white;
    margin-bottom: 40px;
    & p {
      padding: 2px 4px;
      display: none;
      font-size: 12px;
      text-align: center;
    }

    &:hover {
      & .icon {
        display: none;
      }
      & .icon_text {
        position: relative;
        right: 22%;
        display: block;
      }

    }
  }
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
            <Link to='/'><li><Icons.FaHome className="icon"/><p className="icon_text">Home</p></li></Link>
            <Link to='/about'><li><Icons.FaUser className="icon"/><p className="icon_text">About</p></li></Link>
            <Link to='/background'><li><Icons.FaToolbox className="icon"/><p className="icon_text">Exp.</p></li></Link>
            <Link to='/projects'><li><Icons.FaProjectDiagram className="icon"/><p className="icon_text">Projects</p></li></Link>
          </List>
        </Sidebar>
      </div>
    )
  }
};

export default Menu;