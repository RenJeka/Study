package HW_Essential.hw3.test;

public class Main {

    public Main() {
        System.out.println("Main");
    }

    public static void main(String[] args) {
        Cc с = new Cc();

    }
}

class Aa extends Main {
    public Aa() {
        System.out.println("Aa");
    }
}

class Bb extends Aa {
    public Bb() {
        System.out.println("Bb");
    }
}

class Cc extends Bb {
    public Cc() {
        System.out.println("Cc");
    }
}
