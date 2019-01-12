import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';
import LinkWithText from './Links';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
      <Container className="App-footer">
        <Row>
          <Col xs={{ size: 3, offset: 2 }}>
            <LinkWithText color="black"
              url="https://www.linkedin.com/in/luiscvargas/" text="LinkedIn"/>
            </Col>
            <Col xs={{ size: 3, offset: 2 }}>
            <LinkWithText color="black"
              url="https://github.com/luiscvargas" text="Github"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
