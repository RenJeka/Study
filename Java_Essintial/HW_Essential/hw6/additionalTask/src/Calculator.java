public class Calculator {

    static class Operations {
        public static void sum(int number1, int number2) {
            int result = number1 + number2;
            System.out.println(number1 + " + " + number2 + " = "  + result);
        }

        public static void subtraction(int number1, int number2) {
            int result = number1 - number2;
            System.out.println(number1 + " - " + number2 + " = "  + result);
        }

        public static void multiply(int number1, int number2) {
            int result = number1 * number2;
            System.out.println(number1 + " * " + number2 + " = "  + result);
        }

        public static void division(int number1, int number2) {
            double result = (double)number1 / (double)number2;
            System.out.printf(number1 + " / " + number2 + " = %#.2f", result);
            System.out.println();
        }
    }
}
