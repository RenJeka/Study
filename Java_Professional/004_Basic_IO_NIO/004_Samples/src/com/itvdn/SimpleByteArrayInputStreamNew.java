package com.itvdn;

import java.io.ByteArrayInputStream;

public class SimpleByteArrayInputStreamNew {
    public static void main(String[] args) {
        byte[] arrBytes = new byte[] {2, 4, 66, 84};
        ByteArrayInputStream myBAIS = new ByteArrayInputStream(arrBytes);

//        int temp;
//        while ((temp = myBAIS.read()) != -1) {
//            System.out.println(temp);
//        }

        String str = "hello";
        byte[] arr2 = str.getBytes();
//        ByteArrayInputStream myBAIS2 = new ByteArrayInputStream(arr2, 1, 3);
        ByteArrayInputStream myBAIS2 = new ByteArrayInputStream(arr2, 0, 7);
        int temp2;
        while ((temp2 = myBAIS2.read()) != -1) {
            System.out.println((char) temp2);
        }
    }
}
