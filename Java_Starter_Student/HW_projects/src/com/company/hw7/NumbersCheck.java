package com.company.hw7;

import java.util.Scanner;

public class NumbersCheck {

    static String getMessagePositiveOrNegative(int number) {
        if (number > 0) {
            return "Число положительное.";
        } else if (number < 0){
            return "Число отрицательное.";
        } else {
            return "Число равное нулю.";
        }
    }

    static boolean isNumberDivisibleBySomeNumbers(int number) {

        if (number % 2 == 0 && number % 3 == 0 && number % 5 == 0 && number % 6 == 0 && number % 9 == 0) {
            return true;
        } else {
            return false;
        }
    }

    static boolean isPrimeNumber(int number) {
        int dividers = 0;

        if (number <= 1) {
            return false;
        }

        for (int i = 1; i <= number; i++) {
            if (number % i == 0) {
                dividers++;
            }
        }

        return dividers > 2 ? false : true;
    }

    static void checkUserNumber(int userNumber) {
        System.out.println(getMessagePositiveOrNegative(userNumber));

        System.out.println("Число " + (isNumberDivisibleBySomeNumbers(userNumber) ? "делится " : "не делится " ) + "на числа 2, 5, 3, 6, 9 без остатка.");

        System.out.println("Число " + (isPrimeNumber(userNumber) ? "" : "не " ) + "является простым.");


    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Введите число: ");
        int userNumber = scanner.nextInt();

        checkUserNumber(userNumber);


    }
}
