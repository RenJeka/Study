package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public enum Animals {
    // Создаем список именованных констант
    Amimal1(10), Animal2(13), Animal3(7);

    // Поля класа
    private int year;

    // Конструктор с параметрами
    Animals(int year) {
        this.year = year;
    }

    // Перегружаем метод toString()
    @Override
    public String toString() {
        return this.name() + ": year = " + year;
    }
}

// Создаем основной класc
class Main {
    public static void main(String[] args) {
        // Создаем екзємпляр Animals
        Animals animals = null;

        // Выводим информацию на консоль
        System.out.println(animals.Amimal1.toString());
        System.out.println(animals.Animal2.toString());
        System.out.println(animals.Animal3.toString());
    }
}
