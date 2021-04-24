package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Printer {
    // Метод для вывода строки
    void print(String value) {
        System.out.println((char) 27 + "[31m" + value);
    }

    void print(String value1, String value2) {
        System.out.println((char) 27 + "[32m" + value1 + (char) 27 + "[35m" + value2);
    }
}
