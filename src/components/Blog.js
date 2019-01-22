import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';
import LinkButton from './Links';
import { Link } from 'react-router-dom';

class BlogEntry extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h4>{this.props.title}</h4>
        <div>{this.props.children}</div>
    </React.Fragment>
    )
  }

}

export default BlogEntry;
