package packageTask4HW2;

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car();
        Car car2 = new Car(2005);
        Car car3 = new Car(2009, 250);
        Car car4 = new Car(2011, 280, 1340);
        Car car5 = new Car(2019, 310, 1295, "black");

        System.out.println("car1 : " + car1);
        System.out.println("car2 : " + car2);
        System.out.println("car3 : " + car3);
        System.out.println("car4 : " + car4);
        System.out.println("car5 : " + car5);
    }
}
