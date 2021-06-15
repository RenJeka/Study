package com.itvdn.javaProfessional.ex_007_stringBuffer.stringBuffer;

public class Main {
    public static void main(String[] args) {
        String str1 = "У кота ";
        String str2 = " лапы";
        int paws = 4;
        StringBuffer sb = new StringBuffer(20);
        sb.append(str1).append(paws).append(str2);
        System.out.println(sb.capacity());
        System.out.println(sb);
    }
}
