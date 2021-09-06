package com.itvdn.javaProfessional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SimpleBuffReader {
    public static void main(String[] args) throws IOException {

        // если в блоке try — catch в круглых скобках прописать создание "BufferedReader" — то он закроется (метод 'close()') самостоятельно
//        try(BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
////            String str = br.readLine(); // Считываем строку
//            int num = Integer.parseInt(br.readLine());
//            System.out.println(num); // Выводим в консоль
//
//            //В случае ошибки — обрабатываем (выводим "StackTrace")
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

//        int i = System.in.read(); // Считывает байты
//        System.out.println(i);
//        System.out.println((char)i);

        InputStreamReader iStreamReader = new InputStreamReader(System.in);
        int i2 = iStreamReader.read();
        System.out.println(i2);
        System.out.println((char)i2);

    }
}
