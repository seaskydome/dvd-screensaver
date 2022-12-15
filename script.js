
// need to declare out here so that its in scope for the html
function reset(){};

var image = new Image();
// all code goes in here so that it waits until after the image loads to do anything
image.onload = function(){
    // setup canvas
    var canvas = document.getElementById("myCanvas");
    var imgWidth;
    var imgHeight;
    resizeCanvas();

    var ctx = canvas.getContext("2d");
    
    // constants
    const minDX = 2;
    const minDY = 1;

    // variables
    var dx = 2;
    var dy = -1;
    var x = canvas.width / 2 - (imgWidth/2);
    var y = canvas.height - imgHeight;
    
    function draw(){
        // clear canvas then draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, x, y, imgWidth, imgHeight);

        checkCollision();

        // change position
        x += dx;
        y += dy;
    }

    // loop
    setInterval(draw, 1);

    // other functions

    //this causes the image to bounce off the top, bottom, and sides
    function checkCollision(){
        if(y + dy < 0 || y + dy > canvas.height - imgHeight){
            dy = -dy;
            dy *= (Math.random() * 2);
            if(Math.abs(dy) < minDY) dy = minDY;
        }
        if(x + dx < 0 || x + dx > canvas.width - imgWidth){
            dx = -dx;
            dx *= (Math.random() * 2);
            if(Math.abs(dx) < minDX) dx = minDX;
        }
    }

    // resize canvas
    function resizeCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if(canvas.width < 1000){
            imgWidth = 100;
            imgHeight = 51;
        } else {
            imgWidth = 320;
            imgHeight = 163;
        }
    }

    // override reset function
    reset = function() {
        resizeCanvas();
        dx = 2;
        dy = -1;
        x = canvas.width / 2 - (imgWidth/2);
        y = canvas.height - imgHeight;
        
        document.getElementById("temp").style.display = "none";
    }
    
};

// credit to wikipedia for image source
image.src="https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg"



