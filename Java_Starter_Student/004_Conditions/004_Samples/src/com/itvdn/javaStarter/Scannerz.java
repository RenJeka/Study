package com.itvdn.javaStarter;

import java.util.Scanner;

public class Scannerz {
    public static void main(String[] args) {
        System.out.println("Just input smth:");
        Scanner input = new Scanner(System.in);
        String buffer = input.next();
        Integer in = Integer.parseInt(buffer);
        System.out.println(buffer);
    }
}
