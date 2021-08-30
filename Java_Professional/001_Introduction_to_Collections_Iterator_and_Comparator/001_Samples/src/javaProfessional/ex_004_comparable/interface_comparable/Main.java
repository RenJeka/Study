package javaProfessional.ex_004_comparable.interface_comparable;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Animal cat = new Animal("Oriental", 7, 25, 5000);
        Animal dog = new Animal("Labrador", 30, 17, 4000);
        Animal bird = new Animal("King Penguin", 15, 8, 50000);
        Animal wolf = new Animal("Grey Wolf", 20, 37, 26990);
        Animal wolf1 = new Animal("Grey Wolf", 15, 32, 27900);
        Animal wolf2 = new Animal("Grey Wolf", 19, 37, 27900);
        Animal wolf3 = new Animal("Grey Wolf", 18, 90, 28200);

        Animal[] c = {cat, dog, bird, wolf, wolf1, wolf2, wolf3};

        Arrays.sort(c);   // ClassCastException w/o Comparable

        for (Animal tmp : c) {
            System.out.println(tmp);
        }
    }
}
