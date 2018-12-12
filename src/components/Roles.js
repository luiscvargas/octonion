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
            <LinkWithText xs="4" url="https://www.linkedin.com/in/luiscvargas/" text="Astrophysics"/>
            <LinkWithText xs="4" url="https://github.com/" text="Data Science"/>
            <LinkWithText xs="4" url="https://twitter.com" text="Programming"/>
        </Row>
      </Container>
    );
  }
}

export default Roles;
