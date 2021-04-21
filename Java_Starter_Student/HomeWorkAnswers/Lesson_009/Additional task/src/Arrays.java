/**
 * Created by Evgeniy on 13.03.2016.
 */
public class Arrays {
    public static void main(String[] args) {

        // Заполняем массив 10 элементами

        int[] a = {5, 3, 33, 7, 0, -12, -17, 28, 159, 11};

        // Выводим в обратном порядке

        for (int i = a.length - 1; i >= 0; i--) {
            System.out.print(a[i] + " ");
        }
    }
}
