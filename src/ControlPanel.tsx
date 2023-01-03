import {
  RepeatIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Stack, Card, CardBody } from "@chakra-ui/react";

export default function ControlPanel(props) {
  const { setRegen, regen, setArtName, artName, artworkCount } = props;
  return (
    <Stack direction="row" spacing={4}>
      <Card>
        <CardBody>
          <RepeatIcon onClick={() => setRegen(false)} boxSize={8} />
          <ChevronLeftIcon
            onClick={() => setArtName(Math.abs(artName - 1) % artworkCount)}
            boxSize={8}
          />
          <ChevronRightIcon
            onClick={() => setArtName((1 + artName) % artworkCount)}
            boxSize={8}
          />
        </CardBody>
      </Card>
    </Stack>
  );
}
