import React, { Component } from 'react';
import '../styles/App.css';
import { Grid, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LinkWithText extends Component {

  constructor(props){
    super(props);
    this.state = {color: "black"};

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }
  onMouseLeave() {
    this.setState({color: "black"});
  }
  onMouseEnter() {
    this.setState({color: "gray"});
  }
  render() {
    return (
        <a href={this.props.url} style={{color: this.state.color}}
          onMouseOut={() => this.onMouseLeave()}
          onMouseOver={() => this.onMouseEnter()}>
          {this.props.text}
        </a>
    );
  }
}

export default LinkWithText;
