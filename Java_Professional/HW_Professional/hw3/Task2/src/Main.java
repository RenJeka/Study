import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String usersTown;
        Map<String, String> lastNamesAndTowns = new HashMap<>();

        lastNamesAndTowns.put("Москва", "Ивановы");
        lastNamesAndTowns.put("Киев", "Петровы");
        lastNamesAndTowns.put("Лондон", "Абрамовичи");

        System.out.println("Введите название города: ");
        usersTown = sc.nextLine();

        if (lastNamesAndTowns.containsKey(usersTown)) {
            System.out.println("В городе " + usersTown + " живут " + lastNamesAndTowns.get(usersTown));
        } else {
            System.out.println("Такого города нет в нашей базе данных!");
        }
    }
}
