
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

    this.enter = function() {

    }

    this.draw = function() {

        background("#e6e6e6");

        this.drawCenterCircle();



    }

    this.drawCenterCircle = function() {

        fill("#fff");
        circle(canvasWidth/2, canvasHeight/2, canvasWidth-50);
        fill("#000");
        circle(canvasWidth/2, canvasHeight/2, 5);

    }

}
