package javaProfessional;


import java.util.Scanner;

public class SimpleScannerNew {
    public static void main(String[] args) {
        String testStringWithDelimenter = "1 Java 2 Java 3 Java 4 Java 5 Java";
        Scanner sc = new Scanner(testStringWithDelimenter).useDelimiter("Java");
//        Scanner sc = new Scanner(testStringWithDelimenter).useDelimiter("\\s*Java\\s*");
        while (sc.hasNextInt()) {
            System.out.println(sc.nextInt());
        }
    }
}
