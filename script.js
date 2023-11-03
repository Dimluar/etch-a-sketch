const canvas = document.querySelector(".canvas");

function makeGrid(n, brush) {
  if (n === "cancel") return;

  // Creates grid of size nxn on canvas
  canvas.innerHTML = "";

  let gridSize = canvas.clientHeight / n;

  for (let i = 1; i <= n; i++) {
    const gridRow = document.createElement("div");
    gridRow.style.height = `${gridSize}px`;
    gridRow.style.width = `${canvas.clientHeight}px`;
    gridRow.classList.add("canvas-row");
    gridRow.style.flex = "1";

    canvas.appendChild(gridRow);

    for (let j = 1; j <= n; j++) {
      const gridUnit = document.createElement("div");
      gridUnit.style.boxShadow = "0px 0px 1px black";
      gridUnit.style.height = `${gridSize}px`;
      gridUnit.style.width = `${gridSize}px`;
      gridUnit.classList.add("canvasPixel");
      gridUnit.style.flex = "1";

      gridRow.appendChild(gridUnit);
    }
  }

  function backgroundColor(element, brush) {
    if (brush === "black") {
      element.style.backgroundColor = "black";
    }
  }

  const allGrids = document.querySelectorAll(".canvasPixel");
  for (pixel of allGrids) {
    pixel.addEventListener("mouseenter", (e) => {
      backgroundColor(e.target, brush);
    });
  }
}

function getDesiredSize() {
  let message = `Pixels per side? (max. 100)
WARNING: the value "0" is equivalent to press Cancel!`;
  while (true) {
    let sideSize = +prompt(message);

    console.log(sideSize);

    if (sideSize > 100) {
      message = "Number must be at most 100";
    } else if (sideSize < 0) {
      message = "Number must be greater than 0";
    } else if (sideSize == NaN) {
      message = "Must be a valid number";
    } else if (sideSize == 0) {
      return "cancel";
    } else {
      return sideSize;
    }
  }
}

const sizeBtn = document.querySelector("#size-btn");
const normalBtn = document.querySelector("#normal-btn");

let actualSize = 16;
let actualBrush = "black";

makeGrid(actualSize, actualBrush);

document.addEventListener("click", (e) => {
  switch (e.target) {
    case sizeBtn:
      actualSize = getDesiredSize();
      makeGrid(actualSize, actualBrush);
      break;
    case normalBtn:
      actualBrush = "black";
      makeGrid(actualSize, actualBrush);
      normalBtn.classList.add("selected-btn");
      break;
  }
});
