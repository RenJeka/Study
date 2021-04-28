public class Main {
    public static void main(String[] args) {
        Vehicle vehicles[] = {
            new Car(1999, 35000, 275),
            new Plane(2001, 1000000, 600, 3800, 40),
            new Ship(2003, 1500000, 150, 150,  "Millenarian port")
        };

        for (Vehicle vehicle : vehicles) {
            System.out.println("=================");
            vehicle.status();
        }
    }
}
