package com.company.hw7;

public class Method {

    static byte addition(byte argument) {
        return ++argument;
    }

    static void procedure(String text) {
        System.out.println("Hello!");
    }
    
    public static void main(String[] args) {
        byte myNumber = 100;
        System.out.println(addition(myNumber));
        procedure("text");
    }
}
