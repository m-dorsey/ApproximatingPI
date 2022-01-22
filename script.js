
// scene manager
var manager;

function setup() {

    manager = new SceneManager();
    manager.addScene(StartScreen);
    manager.addScene(ApproxScreen);

    manager.showNextScene();

    createCanvas(600, 600);

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

        background("#333");

    }

}
