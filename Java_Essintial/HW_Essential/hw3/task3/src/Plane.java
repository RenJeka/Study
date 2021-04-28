public class Plane extends Vehicle{
    int maxLiftingHeight;
    int numberOfPassengers;

    public Plane(int yearOfIssue, int price, int maxSpeed, int maxLiftingHeight, int numberOfPassengers) {
        super(yearOfIssue, price, maxSpeed);
        this.maxLiftingHeight = maxLiftingHeight;
        this.numberOfPassengers = numberOfPassengers;
    }

    @Override
    public void status() {
        super.status();
        System.out.println("maxLiftingHeight : " + maxLiftingHeight);
        System.out.println("numberOfPassengers : " + numberOfPassengers);
    }
}

class Car extends Vehicle{
    public Car(int yearOfIssue, int price, int maxSpeed) {
        super(yearOfIssue, price, maxSpeed);
    }
}

class Ship extends Vehicle{
    int numberOfPassengers;
    String homePort;

    public Ship(int yearOfIssue, int price, int maxSpeed, int numberOfPassengers, String homePort) {
        super(yearOfIssue, price, maxSpeed);
        this.numberOfPassengers = numberOfPassengers;
        this.homePort = homePort;
    }

    @Override
    public void status() {
        super.status();
        System.out.println("numberOfPassengers : " + numberOfPassengers);
        System.out.println("homePort : " + homePort);
    }
}
