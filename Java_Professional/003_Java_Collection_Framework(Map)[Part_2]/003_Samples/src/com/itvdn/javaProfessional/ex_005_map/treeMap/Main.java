package com.itvdn.javaProfessional.ex_005_map.treeMap;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Создали карту изображений
        NavigableMap<String, Animal> nm = new TreeMap();

        // Заполняем map<key, value>
        nm.put("Yevhenii", new Animal(7000));

        Animal pet = new Animal(8000);
        nm.put("Alex", pet);
        nm.put("Edward", new Animal(5000));
        nm.put("Edward", new Animal(6000));

        // Выводим на экран все содержимое
        System.out.println(nm);
        // Пытаемся получить значение с именем Alex
        System.out.println(nm.get("Alex"));
        // Проверяем, существует ли ключ в Map
        System.out.println(nm.containsKey("Edward"));
        System.out.println(nm.containsValue(new Animal(8000)));
        System.out.println(nm.containsValue(pet));

        // Заполняем ключами
        Set<String> nameKeys = nm.keySet();
        // Заполняем значениями
        Collection<Animal> petsPrice = nm.values();
        System.out.println(nameKeys);
        System.out.println(petsPrice);

        // Записали содержимое TreeMap в Set
        Set<Map.Entry<String, Animal>> keysAndValues = nm.entrySet();
        System.out.println(keysAndValues);
        for (Map.Entry<String, Animal> temp : keysAndValues) {
            temp.setValue(new Animal(10000));
        }
        System.out.println(keysAndValues);
    }
}

class Animal {
    private int price;

    Animal(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "" + this.price;
    }
}
