package HW_Essential.hw3.bird;

public class Swallow extends Bird{
    @Override
    public void move() {
        System.out.println("fly");
    }

    public Swallow meth() {
        return new Swallow();
    }
}
