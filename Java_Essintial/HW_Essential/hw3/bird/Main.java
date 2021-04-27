package HW_Essential.hw3.bird;

public class Main {
    public static void main(String[] args) {
        Bird s = new Strauss();
        Bird p = new Penguin();
        Bird sw  = new Swallow();
        Bird[] arr = {s, p, sw};

        for (Bird temp : arr) {
            temp.move();
        }
    }
}
