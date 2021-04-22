package com.itvdn.javaStarter;

public class C04_ArraysNull {
    // Массивы (одномерный массив).

    public static void main(String[] args) {
        int[] array = new int[5];

        int myArray[] = {1, 435, 63, 4444, 3457};

        // Вывод на экран значений элементов массива.
        for (int i = 0; i < myArray.length; i++) {
            System.out.println(myArray[i]);
        }
    }
}
