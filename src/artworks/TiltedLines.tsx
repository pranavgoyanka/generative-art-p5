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
  const { regen, setRegen, size } = props;
  const step = 20;
  const border = 0;

  useEffect(() => {
    // regenerates artwork by removing Sketch and drawing it again
    setRegen(true);
  }, [regen]);

  function artist(p5, x, y, width, height) {
    const leftToRight = Math.random() >= 0.5;
    p5.strokeWeight(2);
    if (leftToRight) {
      p5.line(x, y, x + width, y + height);
    } else {
      p5.line(x + width, y, x, y + height);
    }
  }

  let draw = (p5: P5) => {
    p5.background("fff");
    for (var x = 0; x <= size; x += step) {
      for (var y = 0; y <= size; y += step) {
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
    </>
  );
}
