public class Main {
    public static void main(String[] args) {
        Zoo myZoo = new Zoo();

        System.out.println(myZoo.getAnimals());

        myZoo.getAnimals().set(2, "WILL DELETE");
        myZoo.getAnimals().set(4, "WILL DELETE");
        myZoo.getAnimals().set(6, "WILL DELETE");
        System.out.println(myZoo.getAnimals());

        while (myZoo.getAnimals().remove("WILL DELETE")) ;

        System.out.println(myZoo.getAnimals());
        System.out.println("size: " + myZoo.getAnimals().size());
    }
}
