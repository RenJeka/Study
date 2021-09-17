import java.util.ArrayList;
import java.util.Collection;


public class SimpleCollectionNew {
    public static void main(String[] args) {
// Создание коллекции
        Collection<Integer> list1 = new ArrayList<>();
// Создание элементов
        list1.add(1);
        list1.add(2);
        list1.add(3);

        System.out.println(list1.add(1));
        System.out.println("list1.size() : " + list1.size());

        Collection<Integer> list2 = new ArrayList<>();
        System.out.println("list2.size: " + list2.size());
        list2.addAll(list1);
        System.out.println(list2 + " list2.size: " + list2.size());

// Удаление элементов
//        list2.clear();
//        System.out.println(list2 + " list2.size: " + list2.size());
//        System.out.println(" list2.isEmpty: " + list2.isEmpty());

// Конвертация в массив
        Object[] arr = list2.toArray();

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
        System.out.println(arr.length);
    }
}
