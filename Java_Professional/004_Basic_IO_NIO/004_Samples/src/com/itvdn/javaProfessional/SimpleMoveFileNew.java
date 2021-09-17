package com.itvdn.javaProfessional;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class SimpleMoveFileNew {
    public static void main(String[] args) {
        File sourceFile = new File("D:\\Yevhenii\\STUDY\\Study\\Java_Professional\\004_Basic_IO_NIO\\004_Samples\\sourceFileNew.txt");
        File targetFile = new File("D:\\Yevhenii\\STUDY\\Study\\Java_Professional\\004_Basic_IO_NIO\\004_Samples\\src\\com\\itvdn\\targetFileNew.txt");

        try {
            Files.move(sourceFile.toPath(), targetFile.toPath());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
