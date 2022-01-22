
// scene manager
var manager;

// canvas lengths
var canvasHeight, canvasWidth;

// offset
var offset;

function setup() {

    manager = new SceneManager();
    manager.addScene(StartScreen);
    manager.addScene(ApproxScreen);

    manager.showScene(ApproxScreen);

    canvasHeight = canvasWidth = 800;
    offset = 100;
    createCanvas(canvasWidth-offset, canvasHeight);

}

function draw() {

    manager.draw();

}

function StartScreen() {

    this.enter = function() {

    }

    this.draw = function() {

        background("#e6e6e6");

    }

}

function ApproxScreen() {

    var randPtsBtn, pauseBtn, restartBtn;
    var piApprox = 0.0;
    var totalPts = [];
    var totalNumPts = 0;
    var ptsInCircle = 0;
    var genPts = false;

    var flag = 0;

    this.enter = function() {

        randPtsBtn = new Clickable();
        pauseBtn = new Clickable();
        restartBtn = new Clickable();

        this.initBtns();

    }

    this.draw = function() {

        background("#e6e6e6");
        randPtsBtn.draw();
        restartBtn.draw();

        this.drawCenterCircle();

        textSize(16);
        textAlign(LEFT);
        text(
            "PI Approximation: " + piApprox,
            10, 20
        );
        text(
            "Number of Points Inside: " + ptsInCircle,
            10, 50
        );
        text(
            "Total Number of Points: " + totalNumPts,
            10, 80
        );

        text("(" + int(mouseX) + ", " + int(mouseY) + ")", int(mouseX), int(mouseY));


        if (genPts) {
            this.generateRandPts();
            pauseBtn.draw();

        }

        if (flag) {
            pauseBtn.draw();
        }

        for (p of totalPts) {
            p.draw();
        }







    }

    this.drawCenterCircle = function() {


        stroke("#000");
        strokeWeight(0.5);

        // container square
        fill("#e6e6e6");
        rect(0, offset, canvasWidth-offset, canvasHeight-offset);

        // center circle
        fill("#fff");
        circle((canvasWidth/2)-(offset/2), (canvasHeight/2)+(offset/2), canvasWidth-offset);

        // center point
        fill("#000");
        circle((canvasWidth/2)-(offset/2), (canvasHeight/2)+(offset/2), 2);



    }

    this.initBtns = function() {

        // gen random points btn
        randPtsBtn.locate(canvasWidth-260, 10);
        randPtsBtn.resize(150, 30);
        randPtsBtn.color = "#fff";
        randPtsBtn.cornerRadius = 3;
        randPtsBtn.strokeWeight = 1;
        randPtsBtn.text = "Generate Random Points";
        randPtsBtn.textSize = 12.5;
        randPtsBtn.onPress = function() {
            genPts = true;
        }
        randPtsBtn.onHover = function() {
            randPtsBtn.stroke = "#333";
            randPtsBtn.color = "#bbb";
            randPtsBtn.textColor = "#fff";
        }
        randPtsBtn.onOutside = function() {
            randPtsBtn.stroke = "#000";
            randPtsBtn.color = "#fff";
            randPtsBtn.textColor = "#000";
        }

        // pause btn
        pauseBtn.locate(canvasWidth-260, 45);
        pauseBtn.resize(65, 30);
        pauseBtn.color = "#fff";
        pauseBtn.cornerRadius = 3;
        pauseBtn.strokeWeight = 1;
        pauseBtn.text = "Pause";
        pauseBtn.textSize = 12.5;
        pauseBtn.onPress = function() {
            if (flag == 0) {
                genPts = false;
                pauseBtn.text = "Play";
                flag = 1;
            } else {
                flag = 0;
                genPts = true;
                pauseBtn.text = "Pause";
            }

        }
        pauseBtn.onHover = function() {
            pauseBtn.stroke = "#333";
            pauseBtn.color = "#bbb";
            pauseBtn.textColor = "#fff";
        }
        pauseBtn.onOutside = function() {
            pauseBtn.stroke = "#000";
            pauseBtn.color = "#fff";
            pauseBtn.textColor = "#000";
        }

        // start over btn
        restartBtn.locate(canvasWidth-190, 45);
        restartBtn.resize(80, 30);
        restartBtn.color = "#fff";
        restartBtn.cornerRadius = 3;
        restartBtn.strokeWeight = 1;
        restartBtn.text = "Restart";
        restartBtn.textSize = 12.5;
        restartBtn.onPress = function() {
            genPts = false;
            piApprox = 0.0;
            totalNumPts = 0;
            totalPts = [];
            ptsInCircle = 0;
            flag = 0;
            pauseBtn.text = "Pause";
        }
        restartBtn.onHover = function() {
            restartBtn.stroke = "#333";
            restartBtn.color = "#bbb";
            restartBtn.textColor = "#fff";
        }
        restartBtn.onOutside = function() {
            restartBtn.stroke = "#000";
            restartBtn.color = "#fff";
            restartBtn.textColor = "#000";
        }


    }

    this.generateRandPts = function() {

        // center 350 450
        // x constrain 0 -> canvasWidth - offset
        // y constrain offset -> canvasHeight
        totalNumPts += 1;
        var pt = new Point(1);
        pt.x = int( random(0, canvasWidth-offset) );
        pt.y = int( random(offset, canvasHeight) );
        pt.d = 3;
        totalPts.push(pt);
        //console.log(pt);


        //noLoop();

    }

}
