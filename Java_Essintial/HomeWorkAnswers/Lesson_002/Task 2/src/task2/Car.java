package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Car {
    // Поля класса Car
    int year;
    String color;

    // Конструктор по умолчанию
    public Car() {
        year = 2000;
        color = "yellow";
    }

    // Конструктор с 1 параметром
    public Car(int year) {
        this.year = year;
        color = "white";
    }

    // Конструктор с 2 параметрами
    public Car(int year, String color) {
        this.year = year;
        this.color = color;
    }
}
