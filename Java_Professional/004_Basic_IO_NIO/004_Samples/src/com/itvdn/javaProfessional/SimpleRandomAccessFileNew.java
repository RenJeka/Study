package com.itvdn.javaProfessional;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Arrays;

public class SimpleRandomAccessFileNew {
    public static void main(String[] args) {
        RandomAccessFile raf = null;
        try {
            raf = new RandomAccessFile("randomTextNew.txt", "rw");
            raf.write(new byte[]{0, 1 ,2 ,3, 4, 5, 6, 7 ,8, 9});
            raf.seek(5);
            raf.write(new byte[]{33,55,66});
            raf.seek(0);
            byte[] arr = new byte[10];
            int n = raf.read(arr, 0, 10); // Считываем входной поток "raf" и записываем в массив "arr" с 'off' позиции 'len' символов
            System.out.println(Arrays.toString(arr));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
