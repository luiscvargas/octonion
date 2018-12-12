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
            <LinkWithText color="black" size="4" url="https://www.linkedin.com/in/luiscvargas/" text="LinkedIn"/>
            <LinkWithText color="black" size="4" url="https://github.com/" text="Github"/>
            <LinkWithText color="black" size="4" url="https://twitter.com" text="Twitter"/>
        </Row>
      </Container>
    );
  }
}

export default Footer;
