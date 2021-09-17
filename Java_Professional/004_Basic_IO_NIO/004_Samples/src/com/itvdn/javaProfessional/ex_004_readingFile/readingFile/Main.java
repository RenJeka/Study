package com.itvdn.javaProfessional.ex_004_readingFile.readingFile;

import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Создали объект файла по ссылке
        File f1 = new File("D:\\Yevhenii\\STUDY\\Study\\Java_Professional\\004_Basic_IO_NIO\\004_Samples\\src\\com\\itvdn\\javaProfessional\\ex_004_readingFile\\readingFile\\example.txt");

        // Считываем текстовый файл в пакете
        BufferedReader br = new BufferedReader(new FileReader(f1));

        String temp;
        while ((temp = br.readLine()) != null) {
            System.out.println(temp);
        }
        br.close();

        PrintWriter pw = new PrintWriter(new FileWriter(f1, true));
        pw.println("Good Luck");
        pw.flush();
        pw.close();
    }
}
