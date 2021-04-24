package task4;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        Device device = new Device("Samsung", 300, "DFFDFDFd");
        Device monitor = new Monitor("Samsung", 300, "DHHHFD", 1280, 1024);
        System.out.println(device.toString());
        System.out.println(monitor.toString());

        System.out.println(device.equals(monitor));
        System.out.println(monitor.hashCode());
    }
}
