const canvas = document.querySelector(".canvas");

function makeGrid(n) {
  // Creates grid of size nxn on canvas
  canvas.innerHTML = "";

  let gridSize = canvas.clientHeight / n;
  console.log(gridSize);

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
      gridUnit.style.flex = "1";

      gridRow.appendChild(gridUnit);
    }
  }
}
