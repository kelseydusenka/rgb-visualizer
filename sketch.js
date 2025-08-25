let r, g, b;
let gridSize = 10;
let margin = 50;
let rSlider, gSlider, bSlider;
let sliderXpos = 50;

let rFill

//////////////////////////////////////////////////////////////////

function makeSliders() {
  rSlider = createSlider(0, 255, 199);
  rSlider.position(sliderXpos, windowHeight - margin * 2);
  gSlider = createSlider(0, 255, 137);
  gSlider.position(sliderXpos, windowHeight - margin * 1.5);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(sliderXpos, windowHeight - margin);
}

function saveDrawing() {
  saveCanvas(canvas, 'color-visualization-squares', 'jpg');
}

//////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeSliders();
    button = createButton("SAVE");
  button.mousePressed(saveDrawing);
  button.class("saveButton");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rSlider.remove();
  gSlider.remove();
  bSlider.remove();
  makeSliders();
}

function draw() {
  background(255);

  // grid //
  // for (x = margin; x <= width - margin; x = x + gridSize) {
  //   for (y = margin; y <= height - margin; y = y + gridSize) {
  //     stroke(230);
  //     square(x, y, gridSize);
  //   }
  // }

  noStroke();
  for (x = margin; x <= width - margin; x = x + gridSize * 2) {
    for (y = margin; y <= height - margin * 3; y = y + gridSize * 2) {
      // let rxcolor = map(rSlider.value(), 0, 255, 0, x);
      // let rycolor = map(rSlider.value(), 0, 255, 0, y);
      let rcolor = 200;
      rcolor++;

      fill(rcolor);
      square(x, y, gridSize);

    }
  }


    for (x = margin + gridSize; x <= width - margin; x = x + gridSize * 2) {
      for (y = margin; y <= height - margin * 3; y = y + gridSize * 2) {
        let gxcolor = map(gSlider.value(), 0, 255, 0, x);
        let gycolor = map(gSlider.value(), 0, 255, 0, y);
        fill(255 - gxcolor, gSlider.value(), 255 - gycolor);
        square(x, y, gridSize);
      }
    }

    for (x = margin; x <= width - margin; x = x + gridSize * 2) {
      for (y = margin + gridSize; y <= height - margin * 3; y = y + gridSize * 2
      ) {
        let bxcolor = map(bSlider.value(), 0, 255, 0, x);
        let bycolor = map(bSlider.value(), 0, 255, 0, y);
        fill(255 - bxcolor, 255 - bycolor, bSlider.value());
        square(x, y, gridSize);
      }
    }

          for (x = margin + gridSize; x <= width - margin; x = x + gridSize * 2) {
      for (y = margin + gridSize; y <= height - margin * 3; y = y + gridSize * 2) {
        let rgbAverage = (bSlider.value() + gSlider.value() + rSlider.value()) / 3;
        fill(rgbAverage);
        square(x, y, gridSize);
      }
    }
}
