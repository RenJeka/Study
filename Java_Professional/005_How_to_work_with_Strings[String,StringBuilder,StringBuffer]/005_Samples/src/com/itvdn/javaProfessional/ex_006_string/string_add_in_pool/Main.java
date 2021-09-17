package com.itvdn.javaProfessional.ex_006_string.string_add_in_pool;

public class Main {
    public static void main(String[] args) {
        String s1 = "World";   // pool
        String s2 = "World";   // pool

        // Создаем текст через конструктор
        String s3 = new String("World");
        String s4 = new String("World");
        System.out.println(s1 == s2);

        // Используя метод intern - мы помещаем в пул значения
        System.out.println(s1 == s3.intern());
        System.out.println(s3.intern() == s4.intern());
        System.out.println();

        Integer a = 10;
        Integer b = 10;
        Integer c1 = 128;
        Integer c2 = 128;
        // Целочисленные классы-обёртки свои значение помещают в pool, в пуле могут хранится числа от -128..127(1 byte)
        System.out.println(a == b);
        // Выходим за диапазон 1 байта и получаем результат отрицательный
        System.out.println(c1 == c2);
    }
}
