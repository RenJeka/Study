package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class MyClass<T> {
    //Фабричный метод
    public static <T> void factoryMethod(T t1) {
        System.out.println(t1.toString());
    }

    public static void main(String[] args) {
        factoryMethod(new Double(3.14));
    }
}
