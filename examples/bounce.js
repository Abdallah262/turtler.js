// rectagles which bounce off the side of the canvas
canvas = document.getElementById('turtlecanvas')
var canvasWidth = canvas.width
var canvasHeight = canvas.height


function init_drops(n) {
   var drops = new Array(n);
   for (var i = 0; i < n; i++) {

      var x = random(-canvasWidth/2, canvasWidth/2);
      var y = random(-canvasHeight/2, canvasHeight/2);
      var velocityX = random(-6,6);
      var velocityY = random(-6,6);
      var size = random(20,300);
      var width = random(1,40);
      var a = Math.random();
      var r = random(0,255);
      var g = random(0,255);
      var b = random(0,255);
      drops[i] = {
         x: x, y: y,
         velocityX: velocityX,
         velocityY: velocityY,
         size: size,
         r:r, g:g, b: b,
         width: width,
         a: a
      };
   }
   return drops;
}

function rain (drops, n) {
   clear();
   for (var i = 0; i < n; i++) {
      var d = drops[i];
      colour(d.r,d.g,d.b,d.a);
      width(d.width);
      goto(d.x, d.y);
      if (d.y < -canvasHeight/2) {
         d.velocityY = -d.velocityY;
      }
      else if (d.y + d.size > canvasHeight/2 && d.velocityY > 0) {
         d.velocityY = -d.velocityY;
      }
      if (d.x - d.width/2 < -canvasWidth/2) {
         d.velocityX = -d.velocityX;
      }
      else if (d.x + d.width/2 > canvasWidth/2) {
         d.velocityX = -d.velocityX;
      }
      forward(d.size);
      d.y += d.velocityY;
      d.x += d.velocityX;
   }
}

function main (n=5) {
   wrap(false);
   hideTurtle();
   drops = init_drops(n);
   animate(function () { rain(drops, n)}, 100);
}
