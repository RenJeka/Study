package com.itvdn.javaEssential.ex_002_arrays.rewrite;

public class Main {
    public static void main(String[] args) {
        // создание массива размерностью 5
        int[] arr1 = new int[5];
        System.out.println(arr1.length);
        System.out.println("hash code: " + arr1.hashCode());

        // перезапись массива(создали новый массив).
        // То есть мы создали новый объект (через "new"), и на предыдущий объект уже нет ссылок.
        // Он потенциально может быть удален сборщиком мусора.
        arr1 = new int[25];
        System.out.println(arr1.length);
        System.out.println("hash code: " + arr1.hashCode());
    }
}
