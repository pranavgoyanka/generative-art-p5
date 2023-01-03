import React from "react";
import TiltedLines from "./artworks/TiltedLines";
import Waves from "./artworks/Waves";

export default function Art(props) {
  const { artName, setup, artOptions, artworkCount, regen, setRegen } = props;
  let commonProps = {
    artName: artName + 1,
    artworkCount: artworkCount,
    regen: regen,
    setRegen: setRegen,
  };
  switch (artName) {
    case 0:
      return <TiltedLines setup={setup} size={500} {...commonProps} />;
    case 1:
      return <Waves setup={setup} size={500} {...commonProps} />;
    // case 3:
  }
}
