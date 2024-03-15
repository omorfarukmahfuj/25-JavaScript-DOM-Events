// Option 01 
//** <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// Option 02
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

// Option 3.1
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}

// Option 3.2
const purpleButton = document.getElementById('make-purple');

purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = 'purple';
}

// Option 4.1
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);

function makePink() {
  document.body.style.backgroundColor = 'pink';
}

// Option 4.2
const makeGreenButton = document.getElementById('make-green');

makeGreenButton.addEventListener('click', function makeGreenButton() {
  document.body.style.backgroundColor = 'green';
})

// Option 4.3 (final)
document.getElementById('make-goldenrod').addEventListener('click', function () {
  document.body.style.backgroundColor = 'goldenrod';
})