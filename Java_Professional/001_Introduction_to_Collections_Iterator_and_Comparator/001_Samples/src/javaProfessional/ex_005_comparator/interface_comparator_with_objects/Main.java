package javaProfessional.ex_005_comparator.interface_comparator_with_objects;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Animal cat = new Animal("Oriental", 7, 25, 5000);
        Animal dog = new Animal("Labrador", 30, 20, 4000);
        Animal bird = new Animal("King Penguin", 15, 8, 50000);

        Animal[] c = {cat, dog, bird};

        Arrays.sort(c, new ComparatorByPrice());

        for (Animal tmp : c) {
            System.out.println(tmp);
        }
        System.out.println();

        Arrays.sort(c, new ComparatorBySpeed());
        for (Animal tmp : c) {
            System.out.println(tmp);
        }
        System.out.println();

        Arrays.sort(c, new ComparatorByBreed());

        for (Animal tmp : c) {
            System.out.println(tmp);
        }
    }
}
