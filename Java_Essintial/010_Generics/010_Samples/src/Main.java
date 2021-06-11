
public class Main {

    public static void main(String[] args) {
        Strauss[] s = {new Strauss(55), new Strauss(60)};
        Penguin[] p = {new Penguin(15), new Penguin(18), new Penguin(20)};
        Logic<Strauss> c1 = new Logic<>(s);
        Logic<Penguin> c2 = new Logic<>(p);
        // c1.display();
        // c2.display();
        Logic.weightCompare(c1, c2);
    }
}

class Bird {
    int weight;

    public Bird(int weight) {
        this.weight = weight;
    }

    void move() {}
}

class Strauss extends Bird {

    public Strauss(int weight) {
        super(weight);
    }

    @Override
    void move() {
        System.out.println("Strauss is running!");
    }
}

class Penguin extends Bird {
    public Penguin(int weight) {
        super(weight);
    }

    @Override
    void move() {
        System.out.println("Penguin is swimming!");
    }
}

class Logic<T extends Bird> {
    T[] array;

    public Logic(T[] array) {
        this.array = array;
    }

    void display() {
        for (T temp : array) {
            temp.move();
            System.out.println(temp.weight);
        }
    }

    int weightController() {
        int sum = 0;
        for (T temp: array) {
            sum += temp.weight;
        }
        return sum;
    }

    static void weightCompare(Logic<?> c1, Logic<?> c2) {
        System.out.println(c1.weightController() - c2.weightController());
    }
}
