package packageTask3HW2;

public class Car {
    private int year;
    private double speed;
    private int weight;
    private String color;

    @Override
    public String toString() {
        return "year = " + year +", speed = " + speed +", weight = " + weight +", color = " + color;
    }

    public Car(){
        this(2000, 200, 1100, "white");
    }

    public Car(int year){
        this(year, 200, 1100, "white");
    }

    public Car(int year, double speed){
        this(year, speed, 1100, "white");
    }

    public Car(int year, double speed, int weight){
        this(year, speed, weight, "white");
    }

    public Car(int year, double speed, int weight, String color) {
        this.year = year;
        this.speed = speed;
        this.weight = weight;
        this.color = color;
    }
}
