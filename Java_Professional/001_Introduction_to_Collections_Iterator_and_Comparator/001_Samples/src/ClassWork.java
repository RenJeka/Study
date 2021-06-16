import java.util.ArrayList;
import java.util.Collection;

public class ClassWork {
    public static void main(String[] args) {
        Collection<Integer> list1 = new ArrayList<>();
        list1.add(11);
        list1.add(22);
        list1.add(333);
//        System.out.println(list.add(1));
//        System.out.println("list.size : " + list.size());
        Collection<Integer> list2 = new ArrayList<>();
        System.out.println("list2.size() : " + list2.size());
        list2.addAll(list1);
        System.out.println("list2 : " + list2);
        System.out.println("list2.size() : " + list2.size());
//        list2.clear();
//        System.out.println("list2 : " + list2);
        System.out.println("list2.isEmpty : " + list2.isEmpty());
        Object[] arr = list2.toArray();

        for (int i = 0; i < arr.length; i++) {
            System.out.println("arr["+ i +"] : " + arr[i]);
        }
        System.out.println("arr.length : " + arr.length);
    }
}
