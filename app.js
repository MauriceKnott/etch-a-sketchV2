const container = document.querySelector(".container");
const grid = document.querySelectorAll(".grid-item");
let cell = [];
const clearBtn = document.querySelector(".clear");
const btn = document.querySelectorAll("button");
const rainbowBtn = document.querySelector(".rainbow");
const eraserBtn = document.querySelector(".eraser");

//make grid
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = 0 + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

//create random colors
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

//apply RGB colors to grid
function rainbow() {
  document.querySelectorAll(".grid-item").forEach(function (grid) {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.background = randomColor();
    });
  });
}

//apply black colors to grid
function blackBtn() {
  document.querySelectorAll(".grid-item").forEach(function (grid) {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.background = "black";
    });
  });
}

function eraser() {
  document.querySelectorAll(".grid-item").forEach(function (grid) {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.background = "";
    });
  });
}

//switch between active buttons
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

rainbowBtn.addEventListener("click", rainbow());

//clear button
clearBtn.onclick = function () {
  window.location.reload();
};

//black color
// let ink = 'rgb(0, 0, 0)';

// const color = document.querySelector('.color');
// color.addEventListener('click', function () {
//     let cell = grid.children;
//     cell.addEventListener('mouseover', event => {
//         event.target.style.background = ink;
//     });
// });

// function clear() {
//     grid.forEach(grid => {
//         grid.target.style.removeProperty('background-color')
//     })

// }

// //clear button
// const resetButton = document.querySelector('.clear');
// resetButton.addEventListener('click', clear);

// console.log(clear())

// function clear() {
//     cell.forEach(item => {
//         item.style = 'background-color: rgba(255, 255, 255, 1)';
//         item.removeEventListener('mouseenter', activatePen);
//         item.dataset.darken = 0; //reset # of steps needed to get to black
//     })
//     currentlyActive = false;
// }
