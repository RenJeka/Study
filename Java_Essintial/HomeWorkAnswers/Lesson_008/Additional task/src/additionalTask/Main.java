package additionalTask;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) throws IOException {
        // Переменная для switch
        String operation;

        // Создаем екземпляр класа Calculator
        Calculator calc = new Calculator();

        // Создаем обьект потока вывода из класа java.io
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Input a: ");
        double a = Double.parseDouble(reader.readLine());

        System.out.print("Input b: ");
        double b = Double.parseDouble(reader.readLine());

        System.out.print("Input operation(+, -, *, /):");
        operation = reader.readLine();

        // Создаем switch по операции
        switch (operation) {
            case "+":
                System.out.println("Answer is: " + calc.add(a, b));
                break;
            case "-":
                System.out.println("Answer is: " + calc.sub(a, b));
                break;
            case "/":
                // try - catch для отлавливания ошибок
                try {
                    System.out.println("Answer is: " + calc.div(a, b));
                } catch (ArithmeticException e) {
                    System.out.println(e.getMessage());
                }
                break;
            case "*":
                System.out.println("Answer is: " + calc.mul(a, b));
                break;
            default:
                System.out.println("Wrong operation!");
        }
    }
}
