public class MainHW6 {

    public static void main(String[] args) {
        MyClass instance1 = new MyClass();
        MyClass instance2 = new MyClass();
        MyClass.field = 2;
        MyClass.field = 7;

        System.out.println("instance1.field : " + instance1.field);
        System.out.println("instance2.field : " + instance2.field);

        System.out.println(MyClass.field);
    }
}

class MyClass{
    public static int field;
}
