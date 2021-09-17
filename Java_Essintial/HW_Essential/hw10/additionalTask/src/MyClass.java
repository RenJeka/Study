
public class MyClass<T> {
    public static <T> void factoryMethod(T type1) {
        System.out.println(type1.toString());
    }

    public static void main(String[] args) {

        factoryMethod(new Animal("Cat", 4));
    }
}

class Animal {
    private String name;
    private int countOfLegs;

    @Override
    public String toString() {
        return "Animal{" +
                "name='" + name + '\'' +
                ", countOfLegs=" + countOfLegs +
                '}';
    }

    public Animal(String name, int countOfLegs) {
        this.name = name;
        this.countOfLegs = countOfLegs;

    }
}
