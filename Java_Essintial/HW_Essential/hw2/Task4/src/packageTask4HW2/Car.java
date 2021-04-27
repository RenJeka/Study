package packageTask4HW2;

public class Car {
    private int yearOfIssue;
    private double maxSpeed;
    private int weight;
    private String color;

    @Override
    public String toString() {
        return "yearOfIssue=" + yearOfIssue +
                ", maxSpeed=" + maxSpeed +
                ", weight=" + weight +
                ", color='" + color;
    }

    public Car() {
    }

    public Car(int yearOfIssue) {
        this(yearOfIssue, 200, 1000, "white");
    }

    public Car(int yearOfIssue, double maxSpeed) {
        this(yearOfIssue, maxSpeed, 1000, "white");
    }

    public Car(int yearOfIssue, double maxSpeed, int weight) {
        this(yearOfIssue, maxSpeed, weight, "white");
    }

    public Car(int yearOfIssue, double maxSpeed, int weight, String color) {
        this.yearOfIssue = yearOfIssue;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
        this.color = color;
    }
}
