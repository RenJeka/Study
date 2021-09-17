package com.mydomen;

import java.io.*;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {

        String ps = File.separator; // Path separator
        String pathToFile = "D:"+ps+"Yevhenii"+ps+"STUDY"+ps+"Study"+ps+"Java_Professional"+ps+"HW_Professional"+ps+"hw4"+ps+"additionalTask"+ps+"src"+ps+"com"+ps+"mydomen"+ps+"textFile.txt";
        int currentReadByte = 0;

        // ------------------------- SCANNER ----------
//        File myFile = new File(pathToFile);
//        Scanner sc = new Scanner(myFile);
//        while (sc.hasNextLine()) {
//            System.out.println(sc.nextLine());
//        }
//
//        sc.close();

        // ---------------FileInputStream----------------
//        try(FileInputStream fis = new FileInputStream(pathToFile)) {
//            while ((currentReadByte = fis.read()) != -1) {
//                System.out.print((char)currentReadByte);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        // ------------------InputStreamReader------------------------


            try (
                FileInputStream fis = new FileInputStream(pathToFile);
                InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.UTF_8)
            ){
                while ((currentReadByte = isr.read()) != -1) {
                    System.out.print((char)currentReadByte);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

    }
}
