import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Roles from '../components/Roles';
import { Container, Row, Col } from 'reactstrap';
import '../styles//App.css';

class Programming extends Component {
  render() {
    return (
      <Container className="App-programming">
        Default page for other programming projects
      </Container>
    );
  }
}

export default Programming;
