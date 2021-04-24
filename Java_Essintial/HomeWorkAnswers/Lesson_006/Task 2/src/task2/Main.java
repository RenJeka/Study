package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        // Создаем экземпляры внутренних классов
        Vehicle.Wheel wheel = new Vehicle().new Wheel();
        Vehicle.Door door = new Vehicle().new Door();

        wheel.print();
        door.print();
    }
}
