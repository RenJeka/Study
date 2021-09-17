package com.itvdn.javaProfessional;

public class SimpleWrappersNew {
    public static void main(String[] args) {
        Integer i1 = 10;
        Integer i2 = 10;
        System.out.println(i1 == i2); // true

        Integer i3 = 128;
        Integer i4 = 128;
        System.out.println(i3 == i4); // false
        Character c1 = 1000;
        Character c2 = 1000;
        System.out.println(c1 == c2 );

        Long l1 = 100L;
        Long l2 = 100L;

        System.out.println(l1 == l2);


    }
}
