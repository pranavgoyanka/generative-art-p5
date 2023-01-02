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
  Box,
  VStack,
  Spacer,
  Button,
  Stack,
  useControllableState,
} from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const canvasSize = 250;
  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
  };

  const [regen, setRegen] = useState(1);
  // const [value, setValue] = useControllableState({  40 });

  return (
    <VStack>
      <Box bg="#E9D8FD" w="100%" p={4} color="black">
        Generative Art
      </Box>
      <Spacer />
      <Container>
        <Card align="center">
          <CardHeader>
            <Heading size="lg">Waves</Heading>
          </CardHeader>

          <CardBody>
            {/* <TiltedLines setup={setup} size={500} /> */}
            <Waves setup={setup} size={500} regen={regen} />
          </CardBody>
        </Card>
        <Stack direction="row" spacing={4}>
          {/* <Button
            colorScheme="purple"
            variant="outline"
            onClick={() => setRegen(1 + regen)}
          >
            Generate
          </Button> */}
        </Stack>
      </Container>
    </VStack>
  );
}

export default App;
