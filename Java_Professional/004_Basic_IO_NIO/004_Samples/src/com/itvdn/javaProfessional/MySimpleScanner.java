package com.itvdn.javaProfessional;

import java.util.Scanner;

public class MySimpleScanner {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int i = sc.nextInt();
        float f = sc.nextFloat();
        String str = sc.next();
        Scanner sc2 = new Scanner(System.in);
        String str2 = sc2.nextLine();

        System.out.println("Number " + i + " " + "; Float " + f + "; Word " + str + " " + "; Line " + str2);
    }
}
