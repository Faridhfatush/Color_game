let diffEls = document.querySelectorAll(".diff__btn");
let six = document.querySelector(".six");
let nine = document.querySelector(".nine");
let colorsEl = document.querySelector(".colors");
let colorsBlocks;
let rgbEl = document.querySelector(".rgb");
let h1_bg_change = document.getElementById('change');
let statusEl = document.querySelector(".status");
let n = 6;
six.classList.add('active');
six.addEventListener('click', () => {
  six.classList.add('active');
  n = six.innerHTML;
  if (nine.classList.contains('active')) {
    nine.classList.remove('active');
  }
  createBlocks(n);
  resetGame();
})

nine.addEventListener('click', () => {
  n = nine.innerHTML;
  nine.classList.add('active');
  if (six.classList.contains('active')) {
    six.classList.remove('active');
  }
  createBlocks(n);
  resetGame()
})





let colors = [];
createBlocks(n);
window.onload = resetGame();

function displayColor() {
 let pickedColor = random(n);
  let randClr = colors[pickedColor];
  return randClr;

}

function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  rgbEl.innerHTML = displayColor();
  setColors();
  statusEl.innerHTML =
    `Try to guess the right color based on the RGB value by clicking on the blocks.`;
  statusEl.style.color = '';
  h1_bg_change.style.backgroundColor = '';
}

function setColors() {
  for (let i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (let i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function checkColors(blockClr, block, colorsBlocks) {

  let correctColor = rgbEl.textContent;
  if (blockClr === correctColor) {
    h1_bg_change.style.backgroundColor = correctColor;
    colorsBlocks.forEach(block => {
      block.style.backgroundColor = correctColor;
    })
    statusEl.textContent = `Finally! Correct Guess!`;
    statusEl.style.color = `${correctColor}`;

  } else {
    block.style.backgroundColor = "#eee";
    statusEl.textContent = `Keep guessing...!`;
    statusEl.style.color = 'black';
  }
}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (let i = 0; i < num; i++) {
    let block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  
  colorsBlocks.forEach(block => {
    block.addEventListener('click', () => {
      checkColors(block.style.backgroundColor, block, colorsBlocks);
    })
  })
}
