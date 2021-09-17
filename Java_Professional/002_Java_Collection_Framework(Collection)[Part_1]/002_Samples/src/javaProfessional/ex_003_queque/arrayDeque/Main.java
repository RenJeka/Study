package javaProfessional.ex_003_queque.arrayDeque;

import java.util.ArrayDeque;

public class Main {
    public static void main(String[] args) {
        // Создаем объект ArrayDeque
        ArrayDeque<String> states = new ArrayDeque<>();
        // Стандартное добавление элементов
        states.add("Украина");
        states.add("Франция");

        // Добавляем элемент в самое начало
        states.push("Великобритания");

        // Получаем первый элемент без удаления
        String sFirst = states.getFirst();
        String sLast = states.getLast();

        while (states.peek() != null) {
            // Извлечение c начала
            System.out.println(states.pop());
        }
        System.out.println("Размер очереди: " + states.size());

        ArrayDeque<Person> people = new ArrayDeque<>();
        people.addFirst(new Person("Tom"));
        people.addLast(new Person("Nick"));
        for (Person p : people) {
            System.out.println(p.getName());
        }
    }
}

class Person {
    private String name;

    public Person(String value) {
        name = value;
    }

    String getName() {
        return name;
    }
}

