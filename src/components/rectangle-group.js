import React from "react";
import { Group } from "react-art";
import Rect from "./rectangle";
import Ticker from "../ticker";

function generateItems(num) {
  const items = new Array(num);
  const min = -10;
  const max = 10;
  for (let i = 0; i < num; i++) {
    const size = Math.random() * 20;
    items[i] = {
      width: size,
      height: size,
      x: Math.random() * 700,
      y: Math.random() * 700,
      vx: (Math.random() * (max - min + 1)) + min,
      vy: (Math.random() * (max - min + 1)) + min
    };
  }
  return items;
}

export default class RectangleGroup extends React.Component {

  static propTypes = {
    num: React.PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      items: generateItems(this.props.num)
    };
  }

  componentDidMount() {
    Ticker.on("tick", this.onTick.bind(this));
  }

  onTick() {
    const newItems = this.state.items.map(function(item) {
      item.x = item.x + item.vx;
      item.y = item.y + item.vy;
      return item;
    });
    this.setState({items: newItems});
  }

  render() {
    return (
      <Group>{ this.state.items.map(function(item) {
        return (<Rect {...item} />);
      })}</Group>
    );
  }

}
