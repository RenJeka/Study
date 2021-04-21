package com.company.hw6;

import java.util.Scanner;

public class Geometry {
    public static void main(String[] args) {
     String mySymbol = "*";
        // Прямоугольник
        for (int i = 0; i <= 10; i++) {
            for (int j = 0; j < 10; j++) {
                System.out.print(mySymbol);
                System.out.print(" ");
                System.out.print(" ");
            }
            System.out.print("\n");
        }

        // Прямоугольный треугольник
        for (int i = 0; i <= 10; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(mySymbol);
                System.out.print(" ");
                System.out.print(" ");
            }
            System.out.print("\n");
        }
     // Равносторонний треугольник
        final int COL_SIZE = 7;
        final int ROW_SIZE = COL_SIZE * 2;
        int triangleCounter = 1;
        for (int i = 0; i < COL_SIZE; i++) {
            for (int j = 0; j < ROW_SIZE; j++) {
                if ((j < (ROW_SIZE - triangleCounter) / 2) || (j >= ((ROW_SIZE - triangleCounter) / 2 + triangleCounter))) {
                    System.out.print(" ");
                } else {
                    System.out.print(mySymbol);
                }
            }
            triangleCounter +=2;
            System.out.print("\n");
        }

//        // ОТВЕТ
//        System.out.println("Равносторонний треугольник");
//        for (int i = 1;i <= 5; ++i)
//        {
//            for (int j = 5; j > i; --j)
//                System.out.print(" ");
//            for (int j = 1; j < 2 * i; ++j)
//                System.out.print("*");
//            System.out.println();
//        }

     // Ромб
        for (int i = 1; i <= 5; ++i) {
            for (int j = 5; j > i; --j)
                System.out.print(" ");
            for (int j = 1; j < 2 * i; ++j)
                System.out.print("*");
            System.out.println();
        }
        for (int i = 4; i >= 0; --i) {
            for (int j = 5; j > i; --j)
                System.out.print(" ");
            for (int j = 1; j < 2 * i; ++j)
                System.out.print("*");
            System.out.println();
        }
        
    }
}
