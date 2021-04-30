package HW_Essential.hw3.task3.src;

public class Vehicle {
    int yearOfIssue;
    int price;
    int maxSpeed;

    public Vehicle() {
    }

    public Vehicle(int yearOfIssue, int price, int maxSpeed) {
        this.yearOfIssue = yearOfIssue;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }

    public void status() {
        System.out.println("yearOfIssue : " + yearOfIssue);
        System.out.println("price : " + price);
        System.out.println("maxSpeed : " + maxSpeed);
    }
}
