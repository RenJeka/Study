import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        double number1;
        double number2;
        String operation;
        double result;

        Scanner myScanner = new Scanner(System.in);
        Scanner myScanner2 = new Scanner(System.in);
        System.out.println("Введите первое число: ");
        number1 = Double.parseDouble(myScanner.nextLine());
        System.out.println("Введите второе число: ");
        number2 = Double.parseDouble(myScanner.nextLine());
        System.out.println("Введите одно из 4-рех действий ('+', '-', '*', '/'): ");
        operation = myScanner2.next();


        try {
            result = Calculator.calculate(number1, operation, number2);
            System.out.printf(number1 + " " + operation + " " + number2 + " = %.2f", result);
        } catch (ArithmeticException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }


    }

}
