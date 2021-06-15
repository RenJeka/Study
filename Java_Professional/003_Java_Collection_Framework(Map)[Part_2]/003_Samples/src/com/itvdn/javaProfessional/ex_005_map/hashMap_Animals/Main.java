package com.itvdn.javaProfessional.ex_005_map.hashMap_Animals;

import java.util.HashMap;
import java.util.Objects;

public class Main {
    public static void main(String[] args) {
        Animal dog = new Animal(5000, "Labrador");
        Animal cat = new Animal(7000, "Sphynx");
        Animal bird = new Animal(9000, "Penguin");

        HashMap<Animal, String> hm = new HashMap<>();
        hm.put(dog, "Mike");
        hm.put(cat, "Marsel");
        hm.put(bird, "Riko");

        Animal findName = new Animal(9000, "Penguin");
        System.out.println(hm.get(findName));
    }
}

class Animal {
    private int price;
    private String breed;

    public Animal(int price, String breed) {
        this.price = price;
        this.breed = breed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return Objects.equals(breed, animal.breed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(breed);
    }
}
