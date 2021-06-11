package com.itvdn.javaEssential.classWork;

import java.io.Console;

public class Cat {
    String name;

    Cat(String name) {
        this.name = name;
    }

    Cat() {

    }

    public static void main(String[] args) {
        Cat c1 = new Cat("Barsik");
        Cat c2 = new Cat("Barsik");
//        Cat c2 = c1;
        if (c1 == c2) {
            System.out.println("Cats equals");
        } else {
            System.out.println("Cats are not equals");
        }
    }
}

class Animal extends Cat {
    String n; // нельзя передавать нестатическую переменную родительскому конструктору (конструктору сеперкласса)
//    static String n;

    Animal() {
        super(n);
    }
}

