import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';
import LinkWithText from './Links';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Roles extends Component {

  render() {
    return (
      <Container className="App-roles">
        <Row>
          <Col md="4" xs="12">
            <Link className="main-link" to='/astronomy'>Astronomy</Link>
          </Col>
          <Col md="4" xs="12">
            <Link className="main-link" to='/datascience'>Data Science</Link>
          </Col>
          <Col md="4" xs="12">
            <Link className="main-link" to='/programming'>Programming</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Roles;
