package javaProfessional.ex_001_arrayList.arrayList;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws Exception {
        // Создаем объект ArrayList
        ArrayList<String> arrayList = new ArrayList<>();

        // Создаем объект BufferedReader, для дальнейшего ввода с клавиатуры
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        // Циклом заполняем коллекцию arrayList значениями с клавиатуры
        for (int i = 0; i < 3; i++) {
            System.out.println("Введите значение [" + i + "]");
            String s = reader.readLine();
            // Добавляем значение в конец массива
            arrayList.add(s);
        }

        // Удаляем последнюю строку и добавляем её в начало
        for (int i = 0; i < 5; i++) {
            String s1 = arrayList.remove(arrayList.size() - 1);
            arrayList.add(0, s1);
        }

        // Выводим на экран все содержимое
        for (String temp : arrayList) {
            System.out.println(temp);
        }
    }
}
