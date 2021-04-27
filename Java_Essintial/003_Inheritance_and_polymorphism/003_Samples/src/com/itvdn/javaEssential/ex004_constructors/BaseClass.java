package com.itvdn.javaEssential.ex004_constructors;

/**
 * Наследование.
 */
public class BaseClass {
    public int baseNumber;

    // Конструктор по умолчанию.
    public BaseClass() {
        System.out.println("base without arguments");
    }

    // Пользовательский конструктор.
    public BaseClass(int number) {
        System.out.println("base with arguments");
        this.baseNumber = number;
    }
}
