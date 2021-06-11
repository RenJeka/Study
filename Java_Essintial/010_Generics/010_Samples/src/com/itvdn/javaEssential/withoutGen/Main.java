package com.itvdn.javaEssential.withoutGen;

public class Main {
    public static void main(String[] args) {
        WithoutGen w1 = new WithoutGen("Test");
        WithoutGen w2 = new WithoutGen(10);
        WithoutGen w3 = new WithoutGen(new Cat("Marsel"));

        w1.display();
        w2.display();
        w3.display();

        w1 = w2;

        String s = (String) w1.getObj();
        System.out.println("s : " + s);

    }
}

class WithoutGen {
    Object obj;

    WithoutGen(Object obj) {
        this.obj = obj;
    }

    void display() {
        System.out.println(obj);
    }

    Object getObj() {
        return this.obj;
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
