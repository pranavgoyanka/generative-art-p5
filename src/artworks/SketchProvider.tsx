import Sketch from "react-p5/@types";
import P5 from "p5";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

export default function SketchProvider(props) {
  const { draw } = props;
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="lg">Waves</Heading>
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
