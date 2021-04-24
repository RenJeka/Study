package task3;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        Vehicle plane = new Plane(15.3, 25);
        Vehicle ship = new Ship("Port", 20);

        System.out.println("Ship:\n" + ship.toString());
        System.out.println("Plane:\n" + plane.toString());
    }
}
