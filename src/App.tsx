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
} from "@chakra-ui/react";
import { useState } from "react";
import Art from "./Art";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
function App() {
  const canvasSize = 250;
  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
  };

  const [regen, setRegen] = useState(true);
  const [artName, setArtName] = useState(0);
  const artworkCount = 2;
  // const [value, setValue] = useControllableState({  40 });

  return (
    <VStack>
      <Box bg="#E9D8FD" w="100%" p={4} color="black">
        Generative Art
      </Box>
      <Spacer />
      <Container>
        <Art
          setup={setup}
          artName={artName}
          artworkCount={artworkCount}
          regen={regen}
          setRegen={setRegen}
        />
        <Stack direction="row" spacing={4}>
          {/* <Button
            colorScheme="purple"
            variant="outline"
            onClick={() => setArtName((1 + artName) % artworkCount)}
          >
            Next
          </Button> */}
          <RepeatIcon onClick={() => setRegen(false)} boxSize={5} />
          <ChevronLeftIcon
            onClick={() => setArtName(Math.abs(artName - 1) % artworkCount)}
            boxSize={6}
          />
          <ChevronRightIcon
            onClick={() => setArtName((1 + artName) % artworkCount)}
            boxSize={6}
          />
          {/* <Button
            colorScheme="purple"
            variant="outline"
            onClick={() => {
              this.forceUpdate();
            }}
          >
            Generate
          </Button> */}
        </Stack>
      </Container>
    </VStack>
  );
}

export default App;
