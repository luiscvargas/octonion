import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import { FancyLink } from './Links';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
      <Container className="App-footer">
        <Row>
          <Col style={{textAlign: "center", fontSize: "2vh"}}>
            This website was built with react.js, react-router, and Bootstrap components.
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign: "center"}} xs={{ size: 3, offset: 3 }}>
            <FancyLink color="black"
              url="https://www.linkedin.com/in/luiscvargas/" text="LinkedIn"/>
            </Col>
            <Col style={{textAlign: "center"}} xs={{ size: 3, offset: 0 }}>
            <FancyLink color="black"
              url="https://github.com/luiscvargas" text="Github"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
