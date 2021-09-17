public class Animal {
    public String name;
    public int age;
    public boolean hasTail;
    private final String hasTailRus;


    public Animal(String name, int age, boolean hasTail) {
        this.name = name;
        this.age = age;
        this.hasTail = hasTail;

        hasTailRus = hasTail ? "да" : "нет";
    }

    @Override
    public String toString() {
        return "Имя: " + this.name + ", возраст: " + this.age + ", хвост: " + this.hasTailRus;
    }
}
