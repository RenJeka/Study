package com.itvdn.javaEssential;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List l = new ArrayList();
        List<String> myStringList = new ArrayList<>();

        l = myStringList;
        l.add("Hello");

        String s = myStringList.get(0);
        System.out.println("s : " + s);
    }
}
