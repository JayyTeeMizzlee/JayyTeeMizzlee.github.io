const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "images/cabin.jpg";

const girl = new Image();
girl.src = "images/redhood.png";

const wolfman = new Image();
wolfman.src = "images/wolf.png";

const granny = new Image();
granny.src = "images/granny.png";

const cookies = new Image();
cookies.src = "images/cookies.png";

let imagesLoaded = 0;

function checkAllImagesLoaded() {
  imagesLoaded++;
  if (imagesLoaded === 5) {
    drawScene();
  }
}

background.onload = checkAllImagesLoaded;
girl.onload = checkAllImagesLoaded;
wolfman.onload = checkAllImagesLoaded;
granny.onload = checkAllImagesLoaded;
cookies.onload = checkAllImagesLoaded;

function drawScene() {
  
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(girl, 100, 370, 120, 120);

  ctx.drawImage(wolfman, 620, 330, 80, 80);

  ctx.drawImage(granny, 290, 375, 80, 100);

  ctx.drawImage(cookies, 189, 390, 120, 120);

  ctx.font = "24px Georgia";
  ctx.fillStyle = "white";
  ctx.fillText("by Justin Mann", 20, 80);

  ctx.font = "28px Georgia";
  ctx.fillStyle = "yellow";
  ctx.fillText("Little Red In HD", 20, 40);
}