public abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Прямоугольник");
    }
}
