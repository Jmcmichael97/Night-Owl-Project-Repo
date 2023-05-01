﻿let imgHex;
let angle = 0;
let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
let it = 0;
let drawToggle = 0;

function preload() {
    imgHex = loadImage('/css/icosahedron.png')
}

let x = 0;
let y = 0;

function setup() {
    w = min(windowWidth, windowHeight);
    createCanvas(windowWidth, 100);

    // gridWidth = w;
    // gridHeight = w;
    // hexagonSize = w / 10;
    // hexNum = 50;
    angleMode(DEGREES);

}

function drawHexagon(cX, cY, r) {
    beginShape();

    for (let a = 0; a < TAU; a += TAU / 6) {
        vertex(cX + r * cos(a), cY + r * sin(a));
    }

    endShape(CLOSE);
}




function draw() {
    if (drawToggle < 1) {
        frameCount = 0;
    }


    if (drawToggle == 1) {
        let numOutcome = random(0, 19);



        background(255);
        imageMode(CENTER);

        fill(it / 10, 0, 0);
        rect(0, height / 2 - 20, it - 50, 50, 20);


        // nums = frameCount.ToString();

        // Red square at (100, 100)
        push();
        translate(frameCount, height / 2);
        rotate(angle);
        rotate(angle);
        rotate(angle);

        image(imgHex, 0, 0, 100, 100);
        push();
        text(nums[19], -7, 5);
        frameRate(1);
        pop();
        frameRate(60);


        pop();  //The origin is back to (0, 0) and rotation is back to 0.
        angle += 1;


        // drawHexagon(frameCount,height/2,hexagonSize);



        x += 0.05; //this is the speed of x
        y += 0.04; // this is the speed of y
        it++;
    }
}

function toggle() {
    drawToggle = 1;
}
