import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';
import LinkButton from './Links';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Roles extends Component {

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="12" xs="12">
            <LinkButton className="main-link" to='/astronomy'>Astronomy</LinkButton>
          </Col>
        </Row>
        <Row>
          <Col md="12" xs="12">
            <LinkButton className="main-link" to='/datascience'>Data Science</LinkButton>
          </Col>
        </Row>
        <Row>
          <Col md="12" xs="12">
            <LinkButton className="main-link" to='/programming'>Programming</LinkButton>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Roles;
