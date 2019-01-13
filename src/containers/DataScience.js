import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Roles from '../components/Roles';
import { Container, Row, Col } from 'reactstrap';
import '../styles//App.css';

class DataScience extends Component {
  render() {
    return (
      <div className="DataScience">
        Default page for data science / machine learning.
      </div>
    );
  }
}

export default DataScience;
