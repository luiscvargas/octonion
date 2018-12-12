import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import '../styles/App.css';

class Header extends Component {
  render() {
    return (
      <Container className="App-header">
        <h1>
          Luis C. Vargas
        </h1>
      </Container>
    );
  }
}

export default Header;
