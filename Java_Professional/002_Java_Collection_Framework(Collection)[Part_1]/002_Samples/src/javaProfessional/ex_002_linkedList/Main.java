package javaProfessional.ex_002_linkedList;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {
        // Вызываем метод, измеряющий время 10 тысячи вставок в список
        System.out.println(getTimeMsOfInsert(new ArrayList()));
        System.out.println(getTimeMsOfInsert(new LinkedList()));
    }

    public static long getTimeMsOfInsert(List list) {
        // Создаем объект Date
        Date currentTime = new Date();
        // Вызываем метод insert10000
        insert10000(list);
        Date newTime = new Date();
        // Вычисляем разницу между currentTime и  newTime
        long msDelay = newTime.getTime() - currentTime.getTime();
        System.out.println("Time distance is: " + msDelay + " in ms");
        return msDelay;
    }

    public static void insert10000(List list) {
        for (int i = 0; i < 100000; i++) {
            // Вставляем в начало объекты
            list.add(0, new Object());
        }
    }
}
