/**
 * Created by Evgeniy on 12.03.2016.
 */
public class SumMin {
    public static void main(String[] args) {
        int A = 5, B = 10;

        int sum = 0;

        // Создаем цикл со счетчиком for
        for (int i = A; i < B; i++) {
            sum += i; //  Считаем сумму всех чисел, расположенных между числами A и B
        }
        System.out.println("Сумма чисел в интервале [" + A + " , " + B + "]: " + sum);

        System.out.print("Нечетные числа в интервале [" + A + " , " + B + "]: ");
        for (int i = A; i < B; i++) {
            // В блоке if находим все нечетные значения
            if (!((i % 2) == 0)) {
                System.out.print(i + " ");
            }
        }

    }
}
