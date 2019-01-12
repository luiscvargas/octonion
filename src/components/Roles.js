import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';
import LinkWithText from './Links';
import 'bootstrap/dist/css/bootstrap.min.css';

class Roles extends Component {

  render() {
    return (
      <Container className="App-roles">
        <Row>
          <Col md="4" xs="12">
            <LinkWithText url="https://www.linkedin.com/in/luiscvargas/" text="Astrophysics"/>
          </Col>
          <Col md="4" xs="12">
            <LinkWithText url="https://github.com/" text="Data Science"/>
          </Col>
          <Col md="4" xs="12">
            <LinkWithText url="https://twitter.com" text="Programming"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Roles;
