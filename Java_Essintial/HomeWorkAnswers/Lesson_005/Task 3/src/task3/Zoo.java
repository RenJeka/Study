package task3;

import java.util.ArrayList;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Zoo {
    public static void main(String[] args) {
        // Создание списка ArrayList
        ArrayList list = new ArrayList();

        // Добавление 10 елементов
        list.add("Пантера");
        list.add("Слон");
        list.add("Лев");
        list.add("Бегемот");
        list.add("Носорог");
        list.add("Пингвин");
        list.add("Медведь");
        list.add("Горилла");
        list.add("Тигр");
        list.add("Обезьяна");

        System.out.println("Размер списка до удаления: " + list.size());

        // Удаление елементов
        list.remove(2);
        list.remove(4);
        list.remove(6);

        // Вывод в цикле
        for (Object o : list) {
            System.out.println(o);
        }

        //Размер списка
        System.out.println("\n" + "Размер списка после удаление:" + list.size());
    }
}
