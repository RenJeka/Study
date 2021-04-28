import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String userKey;
        String userAction;
        String programVersionName;
        DocumentWorker userProgram;

        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите ключ для программы: ");
        userKey = scanner.nextLine();

        switch (userKey) {
            case ProDocumentWorker.PRO_KEY:
                userProgram = new ProDocumentWorker();
                programVersionName = "Про";
                break;
            case ExpertDocumentWorker.EXPERT_KEY:
                userProgram = new ExpertDocumentWorker();
                programVersionName = "Експерт";
                break;
            default:
                userProgram = new DocumentWorker();
                programVersionName = "Обычная";
        }
        System.out.println("Версия вашей программы — " + programVersionName);
        System.out.println("Выберите действие: 1 - Открыть документ, 2 - Редактировать документ, 3 - Сохранить документ");
        userAction = scanner.nextLine();
        switch (userAction) {
            case "1":
                userProgram.openDocument();
                break;
            case "2":
                userProgram.editDocument();
                break;
            case "3":
                userProgram.saveDocument();
                break;
            default:
                System.out.println("Выбирать можно только цифры '1' или '2' или '3'. Перезапустите программу!");
        }
    }
}
