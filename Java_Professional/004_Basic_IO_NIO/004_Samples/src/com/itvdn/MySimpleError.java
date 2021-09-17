package com.itvdn;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

public class MySimpleError {
    public static void main(String[] args) {
        try {
            InputStream impStr = new FileInputStream("D:");
            System.out.println("File is successfully opened!");
        } catch (FileNotFoundException e) {
            System.err.println("File opening is failed!");
            e.printStackTrace();
        }
    }
}
