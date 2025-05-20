const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

const slider = document.getElementById('slider');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

const bgRadios = document.querySelectorAll('input[name="bg"]');

const images = {
  character: loadImage('images/ghostface.png'),
  item1: loadImage('images/body.png'),
  item2: loadImage('images/ghost.png'),
  item3: loadImage('images/fan.png'),
};
let background = loadImage('images/graveyard.jpg');

bgRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const newBg = loadImage(`images/${radio.value}`);
      newBg.onload = () => {
        background = newBg;
      };
    });
  });
  
const sounds = {
  1: new Audio('mySounds/ambience.mp3'),
  2: new Audio('mySounds/scream.mp3'),
  3: new Audio('mySounds/laugh.mp3'),
};

function playSound(num) {
  sounds[num].play();
}

function loadImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(images.character, parseInt(slider.value), 300, 280, 200);

  if (item1.checked) ctx.drawImage(images.item1, 450, 300, 230, 230);
  if (item2.checked) ctx.drawImage(images.item2, 400, 275, 100, 100);
  if (item3.checked) ctx.drawImage(images.item3, 700, 410, 80, 80);

  requestAnimationFrame(drawScene);
}

drawScene();