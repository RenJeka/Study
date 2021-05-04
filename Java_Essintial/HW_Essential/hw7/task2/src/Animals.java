
public enum Animals {
    ZEBRA(10), RACCOON(3), GIRAFFE(7), DOG(7), CAT(4), SPARROW(1);

    private int age;
    Animals(int age) {
        this.age = age;
    }


    @Override
    public String toString() {
        return this.name() + ": age: " + this.age;
    }
}
