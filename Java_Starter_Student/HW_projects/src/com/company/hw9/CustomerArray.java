package src.com.company.hw9;

import java.util.Scanner;

public class CustomerArray {
    public static void main(String[] args) {
        int arraySize,
            customerArray[],
            spread,
            maxElement,
            minElement,
            sumElements = 0;
        double average = 0.0;


        System.out.println("Введите длину массива");
        Scanner scanner = new Scanner(System.in);
        arraySize = scanner.nextInt();
        System.out.println("Значения в массиве будут от 0 до...");
        spread = scanner.nextInt();

        customerArray = new int[arraySize];
        for (int index = 0; index < customerArray.length; index++) {
            customerArray[index] = (int) (Math.random() * spread);
        }

        System.out.print("Ваш массив: ");
        for (int i : customerArray) {
            System.out.print(i + " ");
        }

        minElement = maxElement = customerArray [0];

        System.out.print("\nНечетные значения вашего массива: ");

        for (int elem : customerArray) {
            if (elem % 2 == 1) {
                System.out.print(elem + " ");
            }

            if (minElement > elem) {
                minElement = elem;
            }

            if (maxElement < elem) {
                maxElement = elem;
            }
            sumElements += elem;


        }
        average = (double)sumElements / customerArray.length;

        System.out.println();
        System.out.println("Максимальный элемент массива : " + maxElement);
        System.out.println("Минимальный элемент массива : " + minElement);
        System.out.println("Сумма элементов массива : " + sumElements);
        System.out.println("Среднее арифметическое массива : " + String.format("%.3f", average));

    }
}
