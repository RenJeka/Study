package HW_Essential.hw3.test;

public class A {
    {
        System.out.println("In block1");
    }

    static {
        System.out.println("In static block1");
    }

    A(){
        System.out.println("In constructor A");
    }
    {
        System.out.println("In block 2");
    }

    public static void main(String[] args) {
        Aa myAInstance = new Aa();
        Aa myAInstance2 = new Aa();
        Aa myAInstance3 = new Aa();

    }
}
