package task4;

import java.util.ArrayList;
import java.util.ListIterator;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        // Создаем список
        ArrayList<Integer> list = new ArrayList<>();

        // Добавление елементов
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);

        // Создаем итератор
        ListIterator<Integer> iterator = list.listIterator();

        // Проходимся по массиву до конца
        while (iterator.hasNext()) {
            // Редактируем елементы списка(+2 так как индекс итератора с 0)
            list.set(iterator.nextIndex(), iterator.nextIndex() + 2);
            System.out.println(iterator.next());
        }
    }
}
