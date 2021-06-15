package javaProfessional.ex_003_queque.priorityQueue;

import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        // Создаем объект класс PriorityQueue, начальная емкость - 2, а также создаем анонимный внутренний класс
        Queue<Integer> q = new PriorityQueue<>(2, new Comparator<Integer>() {
            @Override
            // Реализуем обратный метод сортировки при помощи метода compare
            public int compare(Integer i1, Integer i2) {
                return i2 - i1;
            }
        });
        // Вставляем элемент в очередь
        q.offer(7); // change 7
        q.offer(9); // change 9
        System.out.println(q);
        q.offer(1); // change 10
        q.offer(6); // change 11
        System.out.println(q);
        // Методом poll возвращаем и удаляем головной элемент очереди
        System.out.println(q.poll());
        System.out.println(q.poll());
        System.out.println(q.poll());
        System.out.println(q);
    }
}
