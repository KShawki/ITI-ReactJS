class Polygon {
  constructor(numOfSides) {
    this.numOfSides = numOfSides;
  }
}

class Square extends Polygon {
  constructor(numOfSides, sideLength) {
    super(numOfSides);
    this.sideLength = sideLength;
  }

  toString() {
    console.log(`Square Area: ${this.sideLength**2}`);
  }
}

class Rectangle extends Polygon {
  constructor (numOfSides, width, length){
    super(numOfSides);
    this.length = length;
    this.width = width;
  }
  toString() {
    console.log(`Rect Area: ${this.width*this.length}`);
  }
}

let square = new Square(2, 2);
square.toString();

let rectangle = new Rectangle(5, 3, 6);
rectangle.toString();