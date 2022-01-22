
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

    var randPtsBtn;
    var piApprox = 0.0;
    var totalPts = 0;
    var ptsInCircle = 0;

    this.enter = function() {

        randPtsBtn = new Clickable();
        this.initBtns();

    }

    this.draw = function() {

        background("#e6e6e6");
        randPtsBtn.draw();

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
            "Total Number of Points: " + totalPts,
            10, 80
        );

        text("(" + int(mouseX) + ", " + int(mouseY) + ")", int(mouseX), int(mouseY));





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
        circle((canvasWidth/2)-(offset/2), (canvasHeight/2)+(offset/2), 3);



    }

    this.initBtns = function() {

        randPtsBtn.locate(canvasWidth-260, 10);
        randPtsBtn.resize(150, 30);
        randPtsBtn.color = "#fff";
        randPtsBtn.cornerRadius = 3;
        randPtsBtn.strokeWeight = 1;
        randPtsBtn.text = "Generate Random Points";
        randPtsBtn.textSize = 12;
        randPtsBtn.onPress = function() {
            generateRandPts();
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

    }

    this.generateRandPts = function() {
        
    }

}
