import React from "react";
import Rect from "react-art/shapes/rectangle";

export default class Rectangle extends React.Component {

  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    x: React.PropTypes.number,
    y: React.PropTypes.number
  }

  render() {
    return  (
      <Rect width={this.props.width} height={this.props.height} fill="#000" x={this.props.x} y={this.props.y}/>
    );
  }

}
