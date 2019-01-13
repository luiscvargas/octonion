import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Roles from '../components/Roles';
import { Container, Row, Col } from 'reactstrap';
import '../styles//App.css';

class Astronomy extends Component {
  render() {
    return (
      <div className="App-astronomy">
        Default page for astronomy or other science projects / news.
      </div>
    );
  }
}

export default Astronomy;
