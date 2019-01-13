import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import { Container, Row, Col } from 'reactstrap';
import '../styles//App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text='Luis C Vargas'/>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
