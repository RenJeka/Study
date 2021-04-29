package packageTask4HW5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.ListIterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> listOfNumbers = new ArrayList<>(Arrays.asList(1, 25, 66, 723, 24, 64, 33, 34));
        ListIterator<Integer> listIterator = listOfNumbers.listIterator();

        while (listIterator.hasNext()) {
            listIterator.set(listIterator.next() + 1);
        }
        System.out.println(listOfNumbers);
    }
}
