package task4;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Car {
    int year;
    double speed;
    int weight;
    String color;

    public Car() {
        this.year = -1;
        this.speed = -1;
        this.weight = -1;
        this.color = "white";
    }

    public Car(int year) {
        this.year = year;
    }

    public Car(int year, double speed) {
        // Вызов конструктора с 1 параметром из конструктора
        this(year);
        this.speed = speed;
    }

    public Car(int year, int speed, int weight) {
        // Вызов конструктора с 2 параметром из конструктора
        this(year, speed);
        this.weight = weight;
    }

    public Car(int year, int speed, int weight, String color) {
        // Вызов конструктора с 3 параметром из конструктора
        this(year, speed, weight);
        this.color = color;
    }

    @Override
    public String toString() {
        return "year = " + year + " speed = " + speed + " weight = " + weight + " color = " + color;
    }
}
