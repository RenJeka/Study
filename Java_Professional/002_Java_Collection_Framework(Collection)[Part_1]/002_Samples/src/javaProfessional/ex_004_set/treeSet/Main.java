package javaProfessional.ex_004_set.treeSet;

import java.util.Iterator;
import java.util.NavigableSet;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        NavigableSet<Integer> ts = new TreeSet<>();
        ts.add(7);
        ts.add(2);
        ts.add(14);
        NavigableSet<Car> tc = new TreeSet<>();
        // Добавляем объект Car в коллекцию
        tc.add(new Car(5000));
        tc.add(new Car(3000));
        System.out.println(tc);
        // Создаем подколлекцию headSet, не больше цифра 5, true - включительно
        NavigableSet<Integer> ts1 = ts.headSet(5, true);
        System.out.println(ts1);
        ts1.add(3);
        System.out.println(ts);
        System.out.println(ts1);
        ts.add(8);
        System.out.println(ts + "\n" + ts1);
//        ts1.add(6);    // В подколлекциях нельзя выходить за пределы IllegalArgumentException
        Iterator<Integer> iterator = ts.iterator(); // С помощью метода итератор мы получили экземляр interface iterator
        while (iterator.hasNext()) {
            Integer temp = iterator.next();
            temp++; // Не изменяется значение temp
//            System.out.println(iterator.next());
        }
        System.out.println(ts);
        Iterator<Car> carIterator = tc.iterator();
        while (carIterator.hasNext()) {
            Car temp = carIterator.next();
            temp.price++; // Изменяем значение поля объекта на 1
//            System.out.println(iterator.next());
        }
        System.out.println(tc);
    }
}

class Car implements Comparable<Car> {
    int price;

    Car(int price) {
        this.price = price;
    }
    
    public String toString() {
        return "" + this.price;
    }

    public int compareTo(Car c) {
        return this.price - c.price;
    }
}
