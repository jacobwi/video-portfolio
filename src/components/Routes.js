import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Container = styled.div`
`

export default class Routes extends Component {
  render() {
    return (
      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/background' component={Skills} />
        <Route path='/projects' component={Projects} />
      </Container>
    )
  }
}
