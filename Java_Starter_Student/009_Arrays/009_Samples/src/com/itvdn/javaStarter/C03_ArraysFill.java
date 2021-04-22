package com.itvdn.javaStarter;

public class C03_ArraysFill {
    // Массивы (одномерный массив).

    public static void main(String[] args) {
        // На 10 строке создаем массив целочисленных элементов с именем array
        // и заполняем его значениями 1,2,3,4,5

        int[] array = new int[]{1, 2, 3, 4, 5};


        int[] myArray = new int[]{6, 16, 77, 23, 47};
        // Вывод на экран значений элементов массива.
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }

        for (int i : myArray) {
            System.out.print(i + " ");
        }
    }
}
