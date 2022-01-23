class Point {

    /**
        Draws this point to the canvas
    */
    draw() {
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.d);
    }

    /**
        Calculates the distance formula
        between this point and the
        parameter passed in and returns
        the result
    */
    distanceFrom(p) {

        //FORMULA:
        // sqrt ( (x2 - x1) ^2 + (y2 - y1)^2 )

        var xPos = p.x - this.x;
        var yPos = p.y - this.y;

        xPos = pow(xPos, 2);
        yPos = pow(yPos, 2);

        var pos = xPos + yPos;

        pos = int( sqrt(pos) );

        return pos;

    }

}
