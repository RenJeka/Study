package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        // Создание массива типа ClassRoom
        ClassRoom[] room = new ClassRoom[3];

        // Инициализация елементов массива
        room[0] = new ClassRoom(new ExcelentPupil());
        room[1] = new ClassRoom(new GoodPupil());
        room[2] = new ClassRoom(new BadPupil());
    }
}
