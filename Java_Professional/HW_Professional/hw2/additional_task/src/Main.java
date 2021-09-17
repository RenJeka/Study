import org.w3c.dom.ls.LSOutput;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String currentString;
        ListIterator stringsIterator;

        ArrayList<String> myStrings = new ArrayList<>();

        Scanner sc = new Scanner(System.in);
        System.out.println("-----------------------------------------------");
        System.out.println("Введите несколько слов, после каждого слова нажимайте 'Enter'. Если вы закончили: введите 'end' и нажмите 'Enter'");
        currentString = sc.nextLine();

        while(!currentString.equals("end")) {
            myStrings.add(currentString);
            currentString = sc.nextLine();
        }
        System.out.println("----- Вы ввели такие слова:");

        stringsIterator = myStrings.listIterator();
        while (stringsIterator.hasNext()) {
            System.out.println(stringsIterator.next());
        }
    }
}
