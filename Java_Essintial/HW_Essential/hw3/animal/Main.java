package HW_Essential.hw3.animal;

public class Main {
    public static void main(String[] args) {
        Cat myCat = new Cat(5, "Marcel", 6 , "Sphinx");
        Cat myCat2 = new Cat(5, "Barsik", 6 , "Main Coon");

        System.out.println(myCat.age + " " + myCat.name + " " + myCat.getWeight()+  " " + myCat.getBrade());
        System.out.println(myCat2.age + " " + myCat2.name + " " + myCat2.getWeight()+  " " + myCat2.getBrade());
    }
}
