package com.itvdn.javaStarter;

public class C11_JaggedArray {
    // Зубчатые массивы (Jagged Array).

    public static <error> void main(String[] args) {
        int[][] jagged = new int[3][];
        String[][] myArrJagg = new String[5][];

        try {
            myArrJagg[0] = new String[]{"Josh"};
            myArrJagg[1] = new String[]{"Bob", "Kevin"};
            myArrJagg[2] = new String[]{"Justin", "Loren", "Meggy"};
        } finally {

        }

        for (int i = 0; i < myArrJagg.length; i++) {
            if (myArrJagg[i] != null) {
                for (int j = 0; j < myArrJagg[i].length; j++) {
                        System.out.print(myArrJagg[i][j] + " ");
                }
                System.out.println();
            }
        }

        System.out.println("=================================");

        jagged[0] = new int[]{1, 2};
        jagged[1] = new int[]{1, 2, 3, 4, 5};
        jagged[2] = new int[]{1, 2, 3};

        // Во внешнем цикле выполняется проход по всем вложенным массивам.
        for (int i = 0; i < jagged.length; ++i) {
            // Во внутреннем цикле выполняется обращение к каждому элементу вложенного массива.
            for (int j = 0; j < jagged[i].length; ++j) {
                System.out.print(" " + jagged[i][j]);
            }
            System.out.print("\n");
        }
    }
}
