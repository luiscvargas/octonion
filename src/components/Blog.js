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
      <div>
        <h4>{this.props.title}</h4>
      </div>
      <div>
        <p>This is the body of the sample blog entry</p>
      </div>
    </React.Fragment>
    )
  }

}

export default BlogEntry;
