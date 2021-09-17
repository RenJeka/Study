package com.itvdn.javaProfessional.ex_006_string.string_immutable;

public class Main {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = s1;
        System.out.println(s1 == s2);

        // Выполняем конкатенацию
        s1 += " World";
        s2 += " World";
        System.out.println(s1 == s2);
        System.out.println(s1);
        System.out.println(s2);
    }
}
