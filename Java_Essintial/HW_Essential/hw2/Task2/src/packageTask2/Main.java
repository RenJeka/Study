package packageTask2;

public class Main {
    public static void main(String[] args) {
        Car mazda = new Car();
        Car chevrolet = new Car(2005, "green");
        Car volkswagen = new Car(2009);
        Car audi = new Car("black");

        System.out.println("mazda : " + mazda);
        System.out.println("chevrolet : " + chevrolet);
        System.out.println("volkswagen : " + volkswagen);
        System.out.println("audi : " + audi);
    }
}
