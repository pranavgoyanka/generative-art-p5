import Sketch from "react-p5";
import P5 from "p5";
import "./App.css";
import Select from "react-select";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

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
    p5.noLoop();
  };
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="lg">Tilted Lines</Heading>
      </CardHeader>

      <CardBody>
        <Sketch setup={props.setup} draw={draw} />
      </CardBody>
      <CardFooter>
        {props.artName}/{props.artworkCount}
      </CardFooter>
    </Card>
  );
}
