
// scene manager
var manager;

// canvas lengths
var canvasHeight, canvasWidth;

function setup() {

    manager = new SceneManager();
    manager.addScene(StartScreen);
    manager.addScene(ApproxScreen);

    manager.showScene(ApproxScreen);

    canvasHeight = canvasWidth = 600;
    createCanvas(canvasHeight, canvasWidth);

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

    this.enter = function() {

        randPtsBtn = new Clickable();
        this.initBtns();

    }

    this.draw = function() {

        background("#e6e6e6");
        randPtsBtn.draw();

        this.drawCenterCircle();



    }

    this.drawCenterCircle = function() {

        stroke("#000");
        strokeWeight(1);
        fill("#fff");
        circle(canvasWidth/2, canvasHeight/2, canvasWidth-50);
        fill("#000");
        circle(canvasWidth/2, canvasHeight/2, 5);

    }

    this.initBtns = function() {

        randPtsBtn.locate(10, 10);
        randPtsBtn.resize(150, 30);
        randPtsBtn.color = "#fff";
        randPtsBtn.cornerRadius = 3;
        randPtsBtn.strokeWeight = 1;
        randPtsBtn.text = "Generate Random Points";
        randPtsBtn.textSize = 12;
        randPtsBtn.onPress = function() {

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

}
