package task3;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int countOfNumbers = 0;
        LinkedList<Integer> userValues;

        // Ask user count of numbers
        while (countOfNumbers < 1 || countOfNumbers > 10) {
            System.out.println("Введите количество чисел, которое вы хотите ввести. Значение должно быть от 1 до 10");
            countOfNumbers = scanner.nextInt();

            if (countOfNumbers < 1 || countOfNumbers > 10) {
                System.out.println("Значение должно быть в пределах от 1 до 10!");
            }
        }
        userValues = getIntegerList(countOfNumbers);

        System.out.println("Ваши значения: " + userValues);
        System.out.println("Минимальное значение : " + getMinimum(userValues));

    }

    private static LinkedList<Integer> getIntegerList(int countOfNumbers) {
        LinkedList<Integer> inputValues = new LinkedList<>();
        Scanner scInt = new Scanner(System.in);
        int tempNumber;

        for (int i = 1; i <= countOfNumbers ; i++) {
            System.out.println("Введите " + i + " число и нажмите 'Enter'");
            tempNumber = scInt.nextInt();
            inputValues.add(tempNumber);
        }
        return inputValues;
    }

    private static int getMinimum(LinkedList<Integer> values) {
         //// Вариант №1
//        Collections.sort(values);
//        return values.get(0);

        //// Вариант №2
        return Collections.min(values);
    }
}
