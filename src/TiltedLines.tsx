import Sketch from "react-p5";
import P5 from "p5";
import "./App.css";
import Select from "react-select";

export default function TiltedLines(props) {
  var enableDegeneration = true;
  var step = 20;
  var border = 0;
  let scale = 500;
  let r = props.regen;

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function artist(p5, x, y, width, height) {
    var leftToRight = Math.random() >= 0.5;
    p5.strokeWeight(2);
    if (leftToRight) {
      p5.line(x, y, x + width, y + height);
    } else {
      p5.line(x + width, y, x, y + height);
    }
  }

  const draw = (p5: P5) => {
    p5.background("fff");
    for (var x = border; x < scale - border; x += step) {
      for (var y = border; y < scale - border; y += step) {
        if (enableDegeneration) {
          var rectWidth = Math.random() * 100;
          if (
            // todo: fix magic numbers
            x >= 60 + border &&
            x <= 60 + rectWidth + border &&
            y >= 30 + border &&
            y <= 290 + border
          ) {
            continue;
          }
        }
        artist(p5, x, y, step, step);
      }
    }
    props.regen;
    p5.noLoop();
  };
  return <Sketch setup={props.setup} draw={draw} />;
}
