package com.company.hw3;

/*
  Задание 1
Имеется 3 переменные типа int x = 10, y = 12, и z = 3;
Выполните и рассчитайте результат следующих операций для этих переменных:

• x += y - x++ * z;
• z = --x – y * 5;
• y /= x + 5 % z;
• z = x++ + y * 5;
• x = y - x++ * z;

*/

public class Task1 {
    public static void main(String[] args) {
        int x = 10, y = 12, z = 3;

        x += y - x++ * z;
//        z = --x - y * 5;
//        y /= x + 5 % z;
//        z = x++ + y * 5;
//        x = y - x++ * z;

        System.out.println("x = " + x + "; " + "y = " + y + "; " + "z = " + z + ";" );
    }
}
