package com.itvdn.javaProfessional.ex_005_map;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

public class SimpleHMNew {
    public static void main(String[] args) {
        HashMap<String, Integer> hm = new HashMap<>();
        hm.put(null, 25);
        hm.put(null, 33);
        System.out.println(hm);
        System.out.println(hm.get(null));

        LinkedHashMap<String, String> lhm = new LinkedHashMap<>();
        lhm.put("дыня", "д");
        lhm.put("арбуз", "а");
        lhm.put("манждарин", "м");
        lhm.put("лимон", "л");

        Set<Map.Entry<String, String>> setForLhm = lhm.entrySet();

        for (Map.Entry<String, String> stringStringEntry : setForLhm) {
            System.out.println(stringStringEntry);
        }
    }
}
