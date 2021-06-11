package com.itvdn.javaEssential.ex_001_class_object.declaration;

// класс Car неявно унаследует класс Object

public class Main {
    public static void main(String[] args) {
        // Создали объект класса Car. У него уже есть методы класса Object.
        Main main = new Main();

        // объект класса Car тоже имеет методы класса Object
        Car car = new Car();

        System.out.println("getClass : " + car.getClass());
        System.out.println("car.hashCode()  : " + car.hashCode() );
        System.out.println("car.toString(): " + car.toString());
    }
}

// класс Car явно наследуется от класса Object
class Car extends Object {
}
