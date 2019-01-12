import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import '../styles/App.css';

class Header extends Component {
  render() {
    return (
      <Container className="App-header">
        <h1>{this.props.text}</h1>
      </Container>
    );
  }
}

export default Header;
