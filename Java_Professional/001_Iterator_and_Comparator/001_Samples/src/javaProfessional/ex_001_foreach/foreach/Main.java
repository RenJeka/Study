package javaProfessional.ex_001_foreach.foreach;

public class Main {
    public static void main(String[] args) {
        Animal cat = new Animal("Sphynx", 4000);
        Animal dog = new Animal("Malamute", 3000);
        Animal bird = new Animal("Crow", 2000);

        Animal[] c = {cat, dog, bird};

        for (Animal tmp : c) {
            tmp.price = tmp.price + 1000;    // Возможно изменение полей объекта
//            tmp = new Animal("Lion", 200000);     // Нельзя поменять объекты в массиве
        }

        for (Animal tmp : c) {
            System.out.println(tmp.breed + " " + tmp.price);
        }
    }
}
