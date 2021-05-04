public class Main {
    public static void main(String[] args) {
        Vehicle.Door myDoor = new Vehicle().new Door();
        Vehicle.Wheel myWheel = new Vehicle().new Wheel();

        myDoor.print();
        myWheel.print();

    }
}
