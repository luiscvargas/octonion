import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogEntry from '../components/Blog';
import Roles from '../components/Roles';
import { Container, Row, Col } from 'reactstrap';
import '../styles/App.css';

class Astronomy extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container className="App-astronomy" style={{ color: "white" }}>
        <h2>Astronomy</h2>
        <div className="App-astronomy-blog">
        <BlogEntry title="(paper III) M31 Outer Halo Chemistry"></BlogEntry>
        <BlogEntry title="(paper II) The M31 Satellite System"></BlogEntry>
        <BlogEntry title="(paper I) Abundance Patterns of the Ultra-Faint Dwarf Galaxies"></BlogEntry>
        <BlogEntry title="Second Entry"></BlogEntry>
        <BlogEntry title="First Entry"></BlogEntry>
      </div>
      </Container>
    );
  }
}

export default Astronomy;
