package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
// Создаем перечислительный тип enum
public enum Vehicles {
    // Создаем список именованных констант
    Car1(1, "red"), Car2(3, "green"), Car3(4, "blue");

    // Поля класа
    private int price;
    private String color;

    // Конструктор с параметрами
    Vehicles(int price, String color) {
        this.price = price;
        this.color = color;
    }

    // Создаем метод для возврата цвета машины
    public String getColor() {
        return color;
    }

    // Перегружаем метод toString()
    @Override
    public String toString() {
        return this.name() + ": price = " + price + "; color = " + this.getColor();
    }
}

// Создаем основной класс
class Main {
    public static void main(String[] args) {
        // Создаем екзємпляр Vehicles
        Vehicles vehicles = null;

        // Выводим информацию на консоль
        System.out.println(vehicles.Car1.toString());
        System.out.println(vehicles.Car3.toString());
    }
}
