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

