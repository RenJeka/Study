package javaProfessional.ex_002_linkedList;

import java.util.*;

enum InsertingMode {
    START,
    END
}

public class Main {
    public static void main(String[] args) throws Exception {
        // Вызываем метод, измеряющий время 10 тысячи вставок в список
        System.out.println("\033[4;31m" + "Inserting to start: " + "\033[0;30m");
        System.out.println(getTimeMsOfInsert(new ArrayList(), InsertingMode.START));
        System.out.println(getTimeMsOfInsert(new LinkedList(), InsertingMode.START));
        System.out.println("================================");
        System.out.println("\033[4;31m" + "Inserting to end: " + "\033[0;30m");
        System.out.println(getTimeMsOfInsert(new ArrayList(), InsertingMode.END));
        System.out.println(getTimeMsOfInsert(new LinkedList(), InsertingMode.END));
    }

    public static long getTimeMsOfInsert(List list, InsertingMode... mode) {
        InsertingMode insertingMode = (mode.length > 0) ? mode[0] : InsertingMode.START;

        // Создаем объект Date
        Date currentTime = new Date();
        // Вызываем метод insert10000

        if (insertingMode == InsertingMode.START) {
            insertToStart(list, 100000);
        } else if (insertingMode == InsertingMode.END){
            insertToEnd(list, 100000);
        }
        Date newTime = new Date();
        // Вычисляем разницу между currentTime и  newTime
        long msDelay = newTime.getTime() - currentTime.getTime();
        System.out.println(list.getClass().toString().substring(list.getClass().toString().lastIndexOf('.') + 1, list.getClass().toString().length()) + " : ");
//        System.out.println("Time distance is: " + msDelay + " in ms");
        return msDelay;
    }

    public static void insertToStart(List list, int countOfInserting) {
        for (int i = 0; i < countOfInserting; i++) {
            // Вставляем в начало объекты
            list.add(0, new Object());
        }
    }

    public static void insertToEnd(List list, int countOfInserting) {
        for (int i = 0; i < countOfInserting; i++) {
            // Вставляем в начало объекты
            list.add(new Object());
        }
    }
}
