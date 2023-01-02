import P5 from "p5";
import Waves from "./Waves";
// import "./App.css";
// import "./Aesthetic.css";
import TiltedLines from "./TiltedLines";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Container,
} from "@chakra-ui/react";
function App() {
  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <Heading size="md">Waves</Heading>
        </CardHeader>

        <CardBody>
          {/* <Text>View a summary of all your customers over the last month.</Text> */}
          <TiltedLines setup={setup} size={500} />
          {/* <Waves setup={setup} size={500} /> */}
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
