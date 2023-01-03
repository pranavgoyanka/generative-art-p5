import React from "react";
import TiltedLines from "./TiltedLines";
import Waves from "./Waves";

export default function Art(props) {
  const { artName, setup, artOptions, artworkCount, regen } = props;
  let commonProps = {
    artName: artName + 1,
    artworkCount: artworkCount,
    regen: regen,
  };
  switch (artName) {
    case 0:
      return <Waves setup={setup} size={500} {...commonProps} />;
    case 1:
      return <TiltedLines setup={setup} size={500} {...commonProps} />;
  }
}
