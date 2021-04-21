/**
 * Created by Evgeniy on 13.03.2016.
 */
public class Calculator {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        int c = 15;

        // Вызываем метод и заносим туда значения переменных
        calculate(a, b, c);
    }

    // Создаем метод calculate, который принимает в качестве аргументов 3 целые переменные
    public static void calculate(int a, int b, int c) {
        System.out.println(a /= 5);
        System.out.println(b /= 5);
        System.out.println(c /= 5);
    }
}
