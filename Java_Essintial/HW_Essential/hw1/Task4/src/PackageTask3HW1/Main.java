package PackageTask3HW1;

public class Main {
    public static void main(String[] args) {
        Computer[] computers = new Computer[5];

        for (int i = 0; i < computers.length; i++) {
            computers[i] = new Computer("MyComputer " + (i + 1));
        }

        for (Computer computer : computers) {
            System.out.println(computer.getName());
        }
    }
}
