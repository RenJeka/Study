package com.itvdn.javaEssential.interfaces.ex002_interfaces;

/**
 * Множественное наследование.
 */
public class Main {
    public static void main(String[] args) {
        Interface1 instance1 = new DerivedClass();
        Interface2 instance2 = new DerivedClass();
        DerivedClass instance3 = new DerivedClass();

        instance1.method1();
        // instance1.method2();

        instance2.method2();
        // instance2.method1();
        System.out.println();
        instance3.method1();
        instance3.method2();
    }
}
