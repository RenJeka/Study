package javaProfessional.ex_002_iterator.iterator;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<>();

        al.add(2);
        al.add(5);
        al.add(8);

        System.out.println(al);

        // с помощью итератора можем бегать по нашему списку
        Iterator<Integer> iterator = al.iterator();

        // спрашиваем есть ли следующий элемент в списке, если true, то будет реализовано тело while
        while (iterator.hasNext()) {
            // переходим к следующему элементу в списке и его выводим
            Integer tmp = iterator.next();
            System.out.println(tmp);
        }

        // то же самое действие, но через оптимизированный итератор под cписки
        ListIterator<Integer> listIterator = al.listIterator();

        while (listIterator.hasNext()) {
            Integer tmp = listIterator.next();
            System.out.println(tmp);
        }
    }
}
