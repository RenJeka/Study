package PackageTask2HW1;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double side1;
        double side2;
        Scanner sc = new Scanner(System.in);
        System.out.println("Введите сторону 1: ");
        side1 = sc.nextDouble();
        System.out.println("Введите сторону 2: ");
        side2 = sc.nextDouble();

        Rectangle userRectangle = new Rectangle(side1, side2);
        System.out.printf("Площаль прямоугольника : %.3f %n",  userRectangle.areaCalculator());
        System.out.printf("Периметр прямоугольника : %.2f %n",  userRectangle.perimeterCalculator());
    }
}
