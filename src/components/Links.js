import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router'

class LinkButton extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {
      history,
      location,
      match,
      staticContext,
      to,
      onClick,
      ...rest
    } = this.props
    return (
      <button
        {...rest} // `children` is just another prop!
        onClick={(event) => {
          onClick && onClick(event)
          history.push(to)
        }}
      />
    )
  }

}

class FancyLink extends Component {

  constructor(props){
    super(props);
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
      <a style={{color: "black"}} href="{this.props.url}">
        {this.props.text}
      </a>
    )
  }

}

export { FancyLink }; // named exports must be in { } just as named imports
export default withRouter(LinkButton);
