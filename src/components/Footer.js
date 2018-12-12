import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
          <Container>
            <Row>
                <LinkWithText size="4" url="https://www.linkedin.com/in/luiscvargas/" text="LinkedIn"/>
                <LinkWithText size="4" url="https://github.com/" text="Github"/>
                <LinkWithText size="4" url="https://twitter.com" text="Twitter"/>
            </Row>
          </Container>
        </footer>
    );
  }
}

export default Footer;

class LinkWithText extends Component {

  constructor(props){
    super(props);
    this.state = {color: "blue"};

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }
  onMouseLeave() {
    this.setState({color: "blue"});
  }
  onMouseEnter() {
    this.setState({color: "red"});
  }
  render() {
    return (
      <Col xs={this.state.xs}>
        <a href={this.props.url} style={{color: this.state.color}}
          onMouseOut={() => this.onMouseLeave()}
          onMouseOver={() => this.onMouseEnter()}>
          {this.props.text}
        </a>
    </Col>
    );
  }
}
