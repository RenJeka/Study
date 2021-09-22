package HW_Essential.hw9.test;

public class TestHW9 {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";

        System.out.println(s1 == s2);
        s1 += "1";
        s2 += "1";
        System.out.println(s1 == s2);
    }
}
