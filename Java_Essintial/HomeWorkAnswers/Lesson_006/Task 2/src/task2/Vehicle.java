package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Vehicle {
    // Создаем метод print()
    public void print() {
    }

    // Создаем внутренний клас Wheel
    class Wheel {
        // Создаем метод print()
        public void print() {
            System.out.println("Внутренний клас Wheel");
        }
    }

    // Создаем внутренний клас Door
    class Door {
        // Создаем метод print()
        public void print() {
            System.out.println("Внутренний клас Door");
        }
    }
}

