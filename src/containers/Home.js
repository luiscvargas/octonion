import React, { Component } from 'react';
import Roles from '../components/Roles';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <Container className="App-home">
        <Row>
        <Col xs="8" sm="8">
          <Jumbotron style={{textAlign: "left"}}>
            <h2>Welcome to my site!</h2>
            <p></p>
            <p>I am a data scientist based in New York City. Please
              click the links to checkout different projects and
              musings on data science.</p>
          </Jumbotron>
        </Col>
        <Col className="App-routes" xs="4" sm="4">
          <Roles />
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Home;
