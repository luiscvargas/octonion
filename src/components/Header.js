import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import '../styles/App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Container className="App-header">
        <Link style={{textDecoration: 'none', color: 'black'}} to='/'>
          <h1>{this.props.text}</h1>
        </Link>
      </Container>
    );
  }
}

export default Header;
