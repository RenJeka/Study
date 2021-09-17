package com.itvdn.javaEssential.withGen;

public class Main {
    public static void main(String[] args) {
        WithGen<String> w1 = new WithGen<>("Test");
        WithGen<Integer> w2 = new WithGen<>(10);
        WithGen<Cat> w3 = new WithGen<>(new Cat("Marsel"));
//        w1 = w2;

        w1.display();
        w2.display();
        w3.display();
    }
}

class WithGen<T> {
    T obj;

    WithGen(T obj) {
        this.obj = obj;
    }

    void display() {
        System.out.println(obj);
    }
}

class Cat {
    String name;

    public Cat(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return this.name;
    }
}
