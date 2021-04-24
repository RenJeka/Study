package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        double add = calc.add(11.0, 15.5);
        double sub = calc.sub(11.0, 15.5);
        double mul = calc.mul(11.0, 15.5);
        double div = calc.div(11.0, 15.5);

        System.out.println("Сложение: " + add + "\n" + "Вычитание: " + sub + "\n" + "Умножение: " + mul + "\n" + "Деление: " + div);
    }
}
