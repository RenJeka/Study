import java.util.*;

public class DoubleValuesMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> myList = new ArrayList<>();
        String tempUserValue;
        System.out.println("Введите 5 слов. После каждого слова нажмите 'Enter'");
        tempUserValue = sc.nextLine();

        while (myList.size() < 5) {
            if (tempUserValue.length() == 0) {
                System.out.println("Вы не ввели слово. Введите еще раз!");
                tempUserValue = sc.nextLine();
            } else {
                myList.add(tempUserValue);
                if (myList.size() < 5) {
                    tempUserValue = sc.nextLine();
                }
            }
        }
        ArrayList<String> newValues =  doubleValues(myList);
        System.out.println("===================");
        for (String newValue : newValues) {
            System.out.println(newValue);
        }
    }

    public static ArrayList<String> doubleValues(ArrayList<String> rawValues) {
        ArrayList<String> doubleList = new ArrayList<>();

        for (int i = 0; i < rawValues.size(); i++) {
            doubleList.add(rawValues.get(i));
            doubleList.add(rawValues.get(i));
        }
        return doubleList;
    }
}
