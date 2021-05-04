public class Calculator {

    private static double add(double a, double b) {
        return a + b;
    }

    private static double sub(double a, double b) {
        return a - b;
    }

    private static double mul(double a, double b) {
        return a * b;
    }

    private static double div(double a, double b) throws ArithmeticException {
        if (b != 0) {
            return a / b;
        } else {
            throw new ArithmeticException("Деление на '0' невозможно!");
        }
    }

    public static double calculate(double a, String operation, double b) throws Exception {
        
        double result = 0.0;
        switch (operation) {
            case ("+"):
                result = Calculator.add(a, b);
                break;
            case ("-"):
                result = Calculator.sub(a, b);
                break;
                
            case ("*"):
                result = Calculator.mul(a, b);
                break;

            case ("/"):
                result = Calculator.div(a, b);
                break;
            default:
                throw new Exception("wrong operation!");
                
        }
        return result;
    }
}
