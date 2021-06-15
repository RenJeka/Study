package com.itvdn.javaProfessional.ex_003_ioStream.io;

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        InputStream is = null;
        try (OutputStream os = new FileOutputStream("test.txt")){
            byte[] bWrite = {11, 21, 3, 40, 56, 77, 1};

            for (int x = 0; x < bWrite.length; x++) {
                os.write(bWrite[x]); // writes the bytes
            }
            os.flush();

            is = new FileInputStream("test.txt");
            int size = is.available();

            for (int i = 0; i < size; i++) {
                System.out.print((char) is.read() + "  ");
            }
        } catch (IOException e) {
            System.out.print("Exception");
        } finally {
            if (is != null) { is.close(); }
        }
    }
}

