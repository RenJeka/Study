import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> myList = new ArrayList<>();
        myList.add("Text1");
        myList.add("Text2");
        myList.add("Text3");
        myList.add("Text44");
        myList.add("Text264");
        myList.add("Text150656");
        Iterator<String> myListIterator =  myList.iterator();

        while (myListIterator.hasNext()) {
            String iteratorElement = myListIterator.next();
            iteratorElement += " | added text";
            System.out.println(iteratorElement);
        }
        System.out.println("---------------------------");
        for (String element : myList) {
            System.out.println(element);
        }
        System.out.println("---------------------------");

        System.out.println(myList);
    }

}
