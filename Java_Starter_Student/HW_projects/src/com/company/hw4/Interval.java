package com.company.hw4;

import java.util.Scanner;

public class Interval {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите число от 0 до 100: ");

        int userNumber = scanner.nextInt();

        if (userNumber >= 0 && userNumber <= 14) {
            System.out.println("Число попадает в промежуток [0 - 14]");
        } else if (userNumber >= 15 && userNumber <= 35) {
            System.out.println("Число попадает в промежуток [15 - 35]");
        } else if (userNumber >= 36 && userNumber <= 50) {
            System.out.println("Число попадает в промежуток [36 - 50]");
        } else if (userNumber >= 51 && userNumber <= 100) {
            System.out.println("Число попадает в промежуток [50 - 100]");
        } else {
            System.out.println("Число не попадает ни в один из промежутков от 0 до 100! Ві ввели некорректное число!");

        }
    }
}
