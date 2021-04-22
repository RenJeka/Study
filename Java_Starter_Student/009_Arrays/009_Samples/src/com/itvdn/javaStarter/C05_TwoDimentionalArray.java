package com.itvdn.javaStarter;

public class C05_TwoDimentionalArray {
    // Массивы (двумерный массив).

    public static void main(String[] args) {
        int[][] array = new int[3][3];
        String[][] arrStrings = new String[5][2];
        arrStrings[0][0] = "00";
        arrStrings[0][1] = "01";
        arrStrings[1][0] = "10";
        arrStrings[1][1] = "11";
        arrStrings[2][0] = "20";
        arrStrings[2][1] = "21";
        arrStrings[3][0] = "30";
        arrStrings[3][1] = "31";
        arrStrings[4][0] = "40";
        arrStrings[4][1] = "41";


        for (String[] rowsArrString : arrStrings) {
            for (String columnsArrStrings : rowsArrString) {
                System.out.print( columnsArrStrings + " ");
            }
            System.out.println();
        }
        System.out.println("===========================");
        array[0][0] = 1;
        array[0][1] = 2;
        array[0][2] = 3;

        array[1][0] = 4;
        array[1][1] = 5;
        array[1][2] = 6;

        array[2][0] = 7;
        array[2][1] = 8;
        array[2][2] = 9;

        System.out.print(array[0][0]);
        System.out.print(array[0][1]);
        System.out.print(array[0][2]);
        System.out.print("\n");
        System.out.print(array[1][0]);
        System.out.print(array[1][1]);
        System.out.print(array[1][2]);
        System.out.print("\n");
        System.out.print(array[2][0]);
        System.out.print(array[2][1]);
        System.out.print(array[2][2]);
    }
}
