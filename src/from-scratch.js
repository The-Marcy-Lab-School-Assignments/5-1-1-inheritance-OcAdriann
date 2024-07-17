class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4
  }
}

class Rectangle extends Quadrilateral {
  constructor(width, height) {
    super(width, height, width, height)
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle{
  constructor(allSides) {
    super(allSides, allSides)
  }
  getDiagonal() {
    return Math.sqrt((this.width * this.height) * 2)
  }
}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
