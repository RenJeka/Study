package com.itvdn.javaProfessional.ex_006_string;

public class StringConcatNew {
    public static void main(String[] args) {
        String str1 = "Looooooooooooooong wooooooo";
        String str2 = " World!";

        String str3 = str1 + str2;
        System.out.println(str3);

        // ---------------------

        String str4 = new StringBuilder().append(str1).append(str2).toString();
//        StringBuilder mySB = new StringBuilder("Hello, Jeka!").reverse();

        System.out.println(new StringBuilder("Hello, Jeka!").reverse());

        StringBuffer sb2 = new StringBuffer(30).append(str1); //.append(str2, 4, 6);
        System.out.println(sb2);
        sb2.append(str2, 2, str2.length());
//        sb2.insert(10, str2);
        System.out.println(sb2);
    }
}
