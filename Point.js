class Point {

    Point() {
        this.x = 0;
        this.y = 0;
        this.d = 3;
        this.color = "#000";
    }

    draw() {
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.d);
    }

    distanceFrom(p) {

        //sqrt ( (x2 - x1) ^2 + (y2 - y1)^2 )

        var xPos = p.x - this.x;
        var yPos = p.y - this.y;

        xPos = pow(xPos, 2);
        yPos = pow(yPos, 2);

        var pos = xPos + yPos;

        pos = int( sqrt(pos) );
        
        return pos;



    }

}
