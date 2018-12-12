import React, { Component } from 'react';
import '../styles/App.css';
import { Grid, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LinkWithText extends Component {

  constructor(props){
    super(props);
    this.state = {color: "white"};

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }
  onMouseLeave() {
    this.setState({color: "white"});
  }
  onMouseEnter() {
    this.setState({color: "gray"});
  }
  render() {
    return (
      <Col xs={this.props.xs} md={this.props.xs} lg="4">
        <a href={this.props.url} style={{color: this.state.color}}
          onMouseOut={() => this.onMouseLeave()}
          onMouseOver={() => this.onMouseEnter()}>
          {this.props.text}
        </a>
    </Col>
    );
  }
}

export default LinkWithText;
