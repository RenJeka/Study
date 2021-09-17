package ClassWork;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList();
//        al.add(10);
//        al.add(20);
//        al.add(55);
//        al.add(0, 30);
//        al.add(99);
//        for (Integer number : al) {
//            System.out.println(number);
//        }

        for (int i = 0; i < 100; i++) {
            al.add(i);
            System.out.print(al.get(i) + " ");
        }
        System.out.println("\n al.size() : " + al.size());

//        for (int i = 0; i < 50; i++) {
//            al.remove(0);
//        }

        for (int i = 0; i < 50; i++) {
            al.remove(50);
        }
        al.trimToSize();

        System.out.println("al.toString() : " + al.toString());
        System.out.println("al.size() : " + al.size());

//        ArrayList myList = new ArrayList();
//        myList.add("some string 1");
//        myList.add(25);
//
//        ArrayList<Integer> list2 = new ArrayList<>();
//
//        list2.add((Integer)myList.get(0));
//        System.out.println(list2.get(0));
    }
}
