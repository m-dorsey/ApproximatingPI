class Point {

    Point() {
        this.x = 0;
        this.y = 0;
        this.d = 3;
        this.color = "#fff";
    }

    draw() {
        fill("red");
        noStroke();
        circle(this.x, this.y, this.d);
    }

    distanceFrom(p) {

    }

}
