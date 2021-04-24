package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main extends Printer{
    public static void main(String[] args) {
        // Приведение типа
        Printer main = new Main();
        Printer printer = new Printer();

        // Метод класа Printer доступен через екземпляр Main
        main.print("Just a red color");
        printer.print("Hello ", "World!");
    }
}
