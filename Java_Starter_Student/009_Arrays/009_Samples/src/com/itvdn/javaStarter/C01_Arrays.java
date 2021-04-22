package com.itvdn.javaStarter;

public class C01_Arrays {
    // Массивы (одномерный массив).

    public static void main(String[] args) {
        // На 9 строке создаем массив целочисленных элементов с именем array размерностью в 5 элементов

        int[] array = new int[5];

        String[] arrStrings = new String[5];

        arrStrings[0] = "word1";
        arrStrings[1] = "word2";
        arrStrings[2] = "word3";
        arrStrings[3] = "word4";
        arrStrings[4] = "word5";
        // На 13 строке элементу массива array по индексу 0 присваиваем значение 10

        array[0] = 10;
        array[1] = 20;
        array[2] = 30;
        array[3] = 40;
        array[4] = 50;

        // На 21 строке выводим на экран значение элемента массива array по индексу 0

        System.out.println(arrStrings[0] + " " + array[0]);
        System.out.println(arrStrings[1] + " " + array[1]);
        System.out.println(arrStrings[2] + " " + array[2]);
        System.out.println(arrStrings[3] + " " + array[3]);
        System.out.println(arrStrings[4] + " " + array[4]);
    }
}
