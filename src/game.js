import React from "react";
import {
  Surface
} from "react-art";

export default class Game extends React.Component {

  render() {
    return  (<Surface
      width={700}
      height={700}
      style={{cursor: "pointer"}} />);
  }

}
