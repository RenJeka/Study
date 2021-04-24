package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        // Создание екземпляров класа Car
        Car car1 = new Car();
        Car car2 = new Car(2016);
        Car car3 = new Car(2015, "red");

        System.out.println(car1.year + " " + car1.color);
        System.out.println(car2.year + " " + car2.color);
        System.out.println(car3.year + " " + car3.color);
    }
}
