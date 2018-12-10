import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo.svg';
import '../styles/App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="App-header">
          <h1>
            Luis C. Vargas
          </h1>
        </header>
      </div>
    );
  }
}

export default Header;
