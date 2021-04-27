package HW_Essential.hw3.bird;

public class Bird {
    public void move() {
        System.out.println("Different ways to bird's move");
    }

    // метод-фабрика
    Bird meth() {
        return new Swallow();
    }
}
