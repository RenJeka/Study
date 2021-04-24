package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Rectangle {
    double side1, side2;

    public double areaCalculator(double side1, double side2) {
        return side1 * side2;
    }

    public double perimetrCalculator(double side1, double side2) {
        return (side1 + side2) * 2;
    }
}
