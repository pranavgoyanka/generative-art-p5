import Sketch from "react-p5";
import P5 from "p5";
import Select from "react-select";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TiltedLines(props) {
  const [enableDegeneration, setEnableDegeneration] = useState(true);
  // const [regen, setRegen] = useState(true);
  const { regen, setRegen } = props;
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
  let draw = (p5: P5) => {
    p5.background("fff");
    for (var x = 0; x <= scale; x += step) {
      for (var y = 0; y <= scale; y += step) {
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
  useEffect(() => {
    setRegen(true);
  }, [regen]);

  return (
    <>
      <Card align="center">
        <CardHeader>
          <Heading size="lg">Tilted Lines</Heading>
        </CardHeader>

        <CardBody>
          {regen ? <Sketch setup={props.setup} draw={draw} /> : <></>}
          {/* <Sketch setup={props.setup} draw={draw} /> */}
        </CardBody>
        <CardFooter>
          {props.artName}/{props.artworkCount}
        </CardFooter>
      </Card>
      {/* <Checkbox
        defaultChecked
        onClick={() => setEnableDegeneration(!enableDegeneration)}
      >
        Enable Degeneration
      </Checkbox> */}
    </>
  );
}
