package javaProfessional.ex_004_set.treeSet_primitives;

import java.util.NavigableSet;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        NavigableSet<Integer> ts = new TreeSet<>();
        ts.add(7);
        ts.add(2);
        ts.add(14);
        ts.add(10);
        System.out.println(ts);
        // Проверяем, получится ли вставить элемент
        System.out.println(ts.add(7));
        System.out.println(ts);
        System.out.println(ts.ceiling(2));
    }
}
