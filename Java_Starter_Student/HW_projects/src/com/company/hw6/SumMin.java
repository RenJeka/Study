package com.company.hw6;

import java.util.Scanner;

public class SumMin {
    public static void main(String[] args) {
        int a, b, sum = 0, sumOdd = 0;
        Scanner scanner = new Scanner(System.in);
        Scanner scanner2 = new Scanner(System.in);

        System.out.println("Введите число 'а': ");
        a = scanner.nextInt();
        System.out.println("Введите число 'b' (число 'b' должно быть больше, чем число 'а'): ");
        b = scanner2.nextInt();

        while (a >= b) {
            System.out.println("Число 'b' должно быть строго больше числа " + a + " ( например " + (a + 1) + " )");
            System.out.println("Введите снова число 'b': ");
            b = scanner2.nextInt();
        }

        for (int i = a; i < b ; i++) {
            sum += i;
            if (i % 2 == 1) {
                sumOdd += i;
            }
        }

        System.out.println("Сумма чисел, между числами " + a + " и " + b + " равна " + sum);
        System.out.println("Сумма всех нечетных чисел между числами " + a + " и " + b + " равна " + sumOdd);
    }
}
