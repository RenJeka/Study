package HW_Essential.hw4.inter;

public interface ITest extends I1, I2 {
    public static final int PRICE = 10;

    public abstract void move();

    static int sum() {
        return 10 + 5;
    }

    default int mul() {
        return 10 * 5;
    }
}

interface I1{
    void move();
}

interface I2{}
