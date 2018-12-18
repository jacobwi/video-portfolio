import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu';
import Routes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Social from './Social';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: black;
    font-family: "Avenir Next", "Avenir", sans-serif;
  }
`
const Container = styled.div`

`
const RouterContainer = styled.div`
`
export default class Layout extends Component {
  render() {
    return (
      <Container>

          <GlobalStyle />
        <Router>
            <RouterContainer>
                <Menu />
                <Social />
                <Routes />
            </RouterContainer>
        </Router>
      </Container>
    )
  }
}
