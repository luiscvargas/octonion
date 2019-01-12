import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Roles from '../components/Roles';
import { Container, Row, Col } from 'reactstrap';
import '../styles//App.css';

class Astrophysics extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Luis C. Vargas"/>
        <Roles />
        <Footer />
      </div>
    );
  }
}

export default Astrophysics;
