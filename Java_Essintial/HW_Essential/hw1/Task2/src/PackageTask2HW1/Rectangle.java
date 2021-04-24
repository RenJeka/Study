package PackageTask2HW1;

public class Rectangle {
    double side1;
    double side2;

    public Rectangle(double side1, double side2) {
        this.side1 = side1;
        this.side2 = side2;
    }

    double areaCalculator() {
        return this.side1 * this.side2;
    }
    double areaCalculator(double side1, double side2) {
        return side1 * side2;
    }

    double perimeterCalculator() {
        return 2 * (this.side1 + this.side2);
    }
    double perimeterCalculator(double side1, double side2) {
        return 2 * (side1 + side2);
    }
}
