import React from "react";
import {
  Surface
} from "react-art";
import RectangleGroup from "./components/rectangle-group";

export default class Game extends React.Component {

  render() {
    return  (
      <Surface width={700} height={700} style={{cursor: "pointer"}}>
        <RectangleGroup num={100} />
      </Surface>
    );
  }

}
