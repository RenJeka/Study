import java.util.Calendar;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Worker workers[] = new Worker[5];
        String tempWorkerSurnameAndInitials;
        String tempWorkerPosition;
        int tempWorkerYearOfJoining;
        int conditionValue;
        Scanner scanner = new Scanner(System.in);
        Scanner scannerInt = new Scanner(System.in);

        for (int i = 0; i < workers.length; i++) {
            System.out.println("Введите фамилию и  инициалы для работника №" + (i + 1));
            tempWorkerSurnameAndInitials = scanner.nextLine();
            System.out.println("Введите название должности для работника №" + (i + 1));
            tempWorkerPosition = scanner.nextLine();
            System.out.println("Введите год поступления на работу в формате (ГГГГ) для работника №" + (i + 1) );
            try {
                tempWorkerYearOfJoining = Integer.parseInt(scanner.nextLine());
                workers[i] = new Worker(tempWorkerSurnameAndInitials, tempWorkerPosition, tempWorkerYearOfJoining);
            } catch (Exception e) {
                System.out.println("Неверный формат данных. В год будет записано значение '0'");
                workers[i] = new Worker(tempWorkerSurnameAndInitials, tempWorkerPosition, 0);
            }
        }
        System.out.println("Input value: ");
        conditionValue = scannerInt.nextInt();
        int yearNow = Calendar.getInstance().get(Calendar.YEAR);


        for (Worker worker : workers) {
            int workExperience = yearNow - worker.yearOfJoining;
            if (workExperience > conditionValue) {
                System.out.println(worker.toString());
            }
        }


    }
}
