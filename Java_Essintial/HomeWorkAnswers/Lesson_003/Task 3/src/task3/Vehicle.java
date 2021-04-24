package task3;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Vehicle {
    // Поля класа
    double cost;
    double speed;
    int year;

    // Конструктор по умолчанию
    Vehicle() {
        cost = 15;
        speed = 200;
        year = 2010;
    }
}

// Производный класс от базового Vehicle
class Plane extends Vehicle {
    double height;
    int count;

    // Конструктор с 2 параметрами
    Plane(double height, int count) {
        this.count = count;
        this.height = height;
    }

    // Перегрузка toString();
    @Override
    public String toString() {
        return "cost = " + cost + " speed = " + speed + " year = " + year + " count = " + count + " height = " + height;
    }
}

class Car extends Vehicle {
}

class Ship extends Vehicle {
    int count;
    String port;

    Ship(String port, int count) {
        this.count = count;
        this.port = port;
    }

    @Override
    public String toString() {
        return "cost = " + cost + " speed = " + speed + " year = " + year + " count = " + count + " port = " + port;
    }
}
