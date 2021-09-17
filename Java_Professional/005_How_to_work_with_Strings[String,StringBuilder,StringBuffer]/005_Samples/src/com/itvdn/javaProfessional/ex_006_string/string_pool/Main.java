package com.itvdn.javaProfessional.ex_006_string.string_pool;

public class Main {
    public static void main(String[] args) {
        // Значение заносим в пул
        String s1 = "World";   // pool
        String s2 = "World";   // pool

        // Создаем строковое значение через конструктор, в пул не помещаем
        String s3 = new String("World");
        String s4 = new String("World");
        System.out.println(s1 == s2);
        System.out.println(s1 == s3);
        System.out.println(s3 == s4);
        System.out.println();

        Integer a = 10;
        Integer b = 10;
        Integer c1 = 128;
        Integer c2 = 128;
        Integer aNew = new Integer(10);
        Integer bNew = new Integer(10);
        System.out.println(aNew == bNew);
        // Целочисленные классы-обёртки свои значение помещают в pool, в пуле могут хранится числа от -128..127(1 byte)
        System.out.println(a == b);
        // Выходим за диапазон 1 байта и получаем результат отрицательный
        System.out.println(c1 == c2);
    }
}
