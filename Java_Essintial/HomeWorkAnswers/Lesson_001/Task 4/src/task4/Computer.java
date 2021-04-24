package task4;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Computer {
    String detail;

    public static void main(String[] args) {
        //Создаем массив типа Computer
        Computer[] computer = new Computer[5];
        computer[0] = new Computer();
        computer[1] = new Computer();
        computer[2] = new Computer();
        computer[3] = new Computer();
        computer[4] = new Computer();

        // Заполняем массив
        for (int i = 0; i < 5; i++) {
            computer[i].detail = "detail_" + i;
        }

        // Вывод в цикле for each
        for (Computer comp : computer) {
            System.out.println("detail: " + comp.detail);
        }
    }
}
