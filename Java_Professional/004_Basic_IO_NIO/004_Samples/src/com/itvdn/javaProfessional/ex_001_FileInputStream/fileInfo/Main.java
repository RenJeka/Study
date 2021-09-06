package com.itvdn.javaProfessional.ex_001_FileInputStream.fileInfo;

import java.io.File;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) {
        try (PrintWriter pw = new PrintWriter(new OutputStreamWriter(System.out, "UTF-8"), true)){
            File f = new File("D:\\Yevhenii\\STUDY\\Study\\Java_Professional\\004_Basic_IO_NIO\\004_Samples\\src\\com\\itvdn\\javaProfessional\\ex_001_FileInputStream\\fileInfo/Main.java");
            pw.println();
            pw.println("Файл \"" + f.getName() + "\" " + (f.exists() ? "" : "не ") + "существует");
            pw.println("Вы " + (f.canRead() ? "" : "не ") + "можете читать файл");
            pw.println("Вы " + (f.canWrite() ? "" : "нe ") + "можете записывать в файл");
            pw.println("Длина файла " + f.length() + " б");
            pw.println();
            File d = new File("D:\\Yevhenii\\STUDY\\Study\\Java_Professional");
            pw.println("Содержимое каталога:");
            if (d.exists() && d.isDirectory()) {
                String[] s = d.list();
                for (int i = 0; i < s.length; i++) {
                    pw.println(s[i]);
                }
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

