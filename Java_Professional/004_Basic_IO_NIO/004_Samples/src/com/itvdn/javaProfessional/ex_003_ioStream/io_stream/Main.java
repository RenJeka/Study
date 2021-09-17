package com.itvdn.javaProfessional.ex_003_ioStream.io_stream;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) throws Exception {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in, "Cp866"));
             PrintWriter pw = new PrintWriter(new OutputStreamWriter(System.out, "UTF-8"), true)){
            //true – означает, что после вызова pw.println(…) можно не вызывать pw.flush().
            String s = "Привет, мир";
            System.out.println("System.out puts: " + s);
            pw.println("PrintWriter puts: " + s);

            char c;
            pw.println("Посимвольный ввод:");
            while ((c = (char) br.read()) != 'q') {
                pw.println(c);
            }

            pw.println("Построчный ввод:");
            do {
                s = br.readLine();
                pw.println(s);
            } while (!s.equals("q"));
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

