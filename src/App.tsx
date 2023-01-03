import P5 from "p5";
import Waves from "./artworks/Waves";
// import "./App.css";
// import "./Aesthetic.css";
import TiltedLines from "./artworks/TiltedLines";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Container,
  Box,
  VStack,
  Spacer,
  Button,
  Stack,
  useControllableState,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import Art from "./Art";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import ControlPanel from "./ControlPanel";
function App() {
  const canvasSize = 250;
  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
  };

  const [regen, setRegen] = useState(true);
  const [artName, setArtName] = useState(0);
  const artworkCount = 2;

  const controlPanelProps = {
    regen,
    setRegen,
    artName,
    setArtName,
    artworkCount,
  };

  const artProps = {
    setup,
    artName,
    artworkCount,
    regen,
    setRegen,
  };

  return (
    <VStack>
      <Box bg="#E9D8FD" w="100%" p={4} color="black" textAlign={"center"}>
        Generative Art
      </Box>
      <Spacer />
      <Container>
        <Art {...artProps} />
      </Container>
      <ControlPanel {...controlPanelProps} />
    </VStack>
  );
}

export default App;
