package packageTask2;

public class Car {
    private int year;
    private String color;

    @Override
    public String toString() {
        return "Car{" +
                "year=" + year +
                ", color='" + color + '\'' +
                '}';
    }

    public Car() {
        this(2000, "white");
    }

    public Car(int year) {
        this(year, "White");
    }

    public Car(String color) {
        this(2000, color);        
    }

    public Car(int year, String color) {
        this.year = year;
        this.color = color;
    }
}
