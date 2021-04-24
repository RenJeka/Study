package task2;

import java.util.ArrayList;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Zoo {
    public static void main(String[] args) {
        //Создание списка ArrayList
        ArrayList list = new ArrayList();

        //Добавление елементов
        for (int i = 0; i < 8; i++) {
            list.add(i, "pet" + i);
        }

        //Вывод в цикле
        for (Object o : list) {
            System.out.println(o);
        }
    }
}
