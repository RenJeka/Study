package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Я умею рисовать круг!");
    }
}

class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Я умею рисовать прямоугольник!");
    }
}

class Main {
    public static void main(String[] args) {
        Shape c = new Circle();
        Shape r = new Rectangle();
        c.draw();
        r.draw();
    }
}
