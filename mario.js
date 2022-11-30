/* This is the brick section */

var min = -getWidth() / 2;
var max = getHeight() / 2;


function main() {
    //set up and move to starting position
    wrap(false);

    goto(min, min);

    //get numver of bricks to draw from user
    numSquares = prompt("number of bricks: ");

    //calculate the side length
    sideLength = getWidth() / numSquares;

    for (var i = 0; i < numSquares; i++) {
        brickBlock(sideLength);
        strafe(sideLength);
    }

    drawCloud(-150, 150);
    drawQuestionMark(150, 130);

}

function rectangle(height, width) {
    for (var i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            forward(height);
        }
        else {
            forward(width);
        }
        right(90);
    }
}

function brickBlock(sideLength) {
    brickRow(sideLength, 2)
    penup();
    forward(sideLength / 3)
    pendown();
    brickRow(sideLength, 3)
    penup();
    forward(sideLength / 3)
    pendown();
    brickRow(sideLength, 2)
    penup()
    left(180);
    forward(sideLength * 2 / 3)
    left(180);


}

function brickRow(sideLength, numBricks) {
    if (numBricks == 2) {
        rectangle(sideLength / 3, sideLength / 2);
        strafe(sideLength / 2)
        rectangle(sideLength / 3, sideLength / 2);
        strafe(-sideLength / 2)
    }

    if (numBricks == 3) {
        penup();
        forward(sideLength / 3);
        pendown();
        right(90);
        forward(sideLength / 4);
        right(90)
        forward(sideLength / 3);
        right(90);
        forward(sideLength / 4);
        right(90);
        strafe(sideLength / 4)
        rectangle(sideLength / 3, sideLength / 2);
        strafe(sideLength / 2)

        forward(sideLength / 3);
        right(90);
        forward(sideLength / 4);
        right(90)
        penup();
        forward(sideLength / 3);
        pendown();
        right(90);
        forward(sideLength / 4);
        right(90);


        strafe(-sideLength * 3 / 4);

    }

}


function strafe(distance) {
    penup();
    if (distance < 0) {
        left(90);
        forward(Math.abs(distance));
        right(90);
    }
    else {
        right(90);
        forward(Math.abs(distance));
        left(90);
    }
    pendown();

}

/* End of brick section */

/* Beginning of question mark section. */

function drawQuestionMark(x, y) {
    goto(x, y);
    drawQuarterCircle(3, 0.5, 0);
    right(90);
    goto(x, y);
    right(90);
    forward(10);
    left(90);
    drawQuarterCircle(3, 0.3, 0);
    forward(10);
    left(90);
    forward(30);
    left(90);
    forward(10);
    left(90)
    forward(20);

    right(180);
    penup();
    forward(35);

    right(90);
    forward(10);
    pendown();

    right(90);
    drawQuarterCircle(4, 0.1, 0);
    hideTurtle();
}

/* End of question mark section */

function drawQuarterCircle(count, size, angle) {
    for (var i = 0; i < count; i++) {
        for (var n = 0; n < 90; n++) {
            forward(size);
            right(1);
        }
        left(angle);
    }
}

function drawCloud(distance) {
    goto(x, y);
    drawQuarterCircle(2, 0.5, 90);
    drawQuarterCircle(2, 0.5, 0);
    left(90);
    drawQuarterCircle(2, 0.5, 90);
    right(90);
    drawQuarterCircle(1, 0.25, 90)
    right(90);
    forward(144);
    drawQuarterCircle(1, 0.25, 90);
    right(90);
}

/* beggining of pipe section */
function drawPipe(x, y) {
    goto(x, y);
    forward(10);
    left(90);
    forward(15);
    right(90);
    forward(15);
    right(90);
    forward(100);
    right(90);
    forward(15);
    right(90);
    forward(10);
    left(90);
    forward(10);
    forward(200);
    right(90);
    forward(75);
    right(90);
    forward(200);
    hideTurtle();
    pendown();
    /* End of pipe section */
}
