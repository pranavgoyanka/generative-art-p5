import Sketch from "react-p5";
import P5 from "p5";
import Select from "react-select";

export default function Waves(props) {
  let lines = [];
  const wdt = props.size;

  function createLines(p5, step) {
    // create lines full of points
    p5.strokeWeight(1.5);
    for (let i = 0; i < props.size; i += step) {
      console.log(i);
      let ln = [];

      for (let j = step; j <= wdt - step; j += step) {
        let point = { x: j, y: i + p5.random() * step };
        ln.push(point);
        console.log(point);
      }
      lines.push(ln);
    }

    // render lines
    for (let i = 0; i < lines.length; i++) {
      // console.log(lines[i]);
      for (let j = 0; j < lines[i].length - 1; j++) {
        p5.line(
          lines[i][j].x,
          lines[i][j].y,
          lines[i][j + 1].x,
          lines[i][j + 1].y
        );
      }
    }
    lines = [];
  }

  const draw = (p5: P5) => {
    // p5.background("#222222");
    // p5.ellipse(50, 50, 80, 80);
    // Draw with p5.js things
    p5.background("fff");
    p5.strokeWeight(1);
    createLines(p5, (10 * props.size) / 240);
    createLines(p5, (20 * props.size) / 240);
    p5.noLoop();
  };

  return <Sketch setup={props.setup} draw={draw} />;
}
