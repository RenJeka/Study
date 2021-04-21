package com.company.hw5;

import java.util.Scanner;

/*
  Задание 2
    Известно, что у четных чисел младший бит имеет значение 0
    Используя IntelliJ IDEA, создайте класс Parity.
    Напишите программу, которая будет выполнять проверку чисел на четность.
    
    Предложите два варианта решения поставленной задачи.

*/

public class Parity {
    public static void main(String[] args) {
        int userNumber,
            mask = 0b1111_1111_1111_1111_1111_1111_1111_1110,
            result;
        String startAgainMarker = "Y";
        Scanner scanner = new Scanner(System.in);
        Scanner scanner2 = new Scanner(System.in);

        while (startAgainMarker.toLowerCase().equals("y")) {

            System.out.println("Введите число: ");
            userNumber = scanner.nextInt();
            result = userNumber | mask;

            if (result == -2) {
                System.out.println("Вы ввели парное число");
            } else if (result == -1){
                System.out.println("Вы ввели непарное число");
            } else {
                System.out.println("Ошибка, попробуйте снова");
                continue;
            }
            System.out.println("Хотите еще попытку? (Y — Да) (N — Нет)");

            if (scanner.hasNextLine()) {
                startAgainMarker = scanner2.nextLine();
            } else {
                break;
            }

        }

    }
}
