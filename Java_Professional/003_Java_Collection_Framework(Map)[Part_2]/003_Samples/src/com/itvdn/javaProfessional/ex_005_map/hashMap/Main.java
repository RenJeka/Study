package com.itvdn.javaProfessional.ex_005_map.hashMap;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws Exception {
        // Создаем массив типа String
        String[] people = new String[]{"Евгений", "Александр", "Карина", "Вероника", "Тамара", "Сергей"};

        // Создаем HashMap, <Ключ, значение>
        HashMap<String, Human> map = addHumansToMap(people);

        // Используя методы интерфейса Map.Entry<Key, Value>, пробегаем по map
        for (Map.Entry<String, Human> pair : map.entrySet()) {
            System.out.println(pair.getKey() + " - " + pair.getValue());
        }
    }

    public static HashMap<String, Human> addHumansToMap(String[] people) {
        HashMap<String, Human> allHumans = new HashMap<>();

        for (String s : people) {
            allHumans.put(s, new Human(s));
        }

        return allHumans;
    }

    public static class Human {
        private String name;

        public Human(String name) {
            this.name = name;
        }

        // Переопределяем метод toString класса Object
        @Override
        public String toString() {  /// Alex  - >  ALEX
            return name != null ? name.toUpperCase() : null;
        }
    }
}
