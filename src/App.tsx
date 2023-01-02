import P5 from "p5";
import Waves from "./Waves";
import "./App.css";
import "./Aesthetic.css";
import TiltedLines from "./TiltedLines";

function App() {
  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  return (
    <div className="container">
      {/* <div className="aesthetic-windows-xp-modal-title-bar">Title</div> */}
      <div className="">
        {/* <Waves setup={setup} size={500} /> */}
        <TiltedLines setup={setup} size={500} />
      </div>
    </div>
  );
}

export default App;
