package com.itvdn.javaProfessional.ex_002_io_buffered.buffered;

import java.io.*;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("D:\\Java Professional Course_video\\004_Basic_IO_NIO\\004_Samples\\src\\com\\itvdn\\javaProfessional\\ex_002_io_buffered\\buffered\\Main.java"), "Cp866"));
             BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("Main.java"), "Cp866"))){

            int c;
            while ((c = br.read()) != -1) {
                bw.write((char) c);
            }
            bw.flush();
            System.out.println("The job's finished.");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
