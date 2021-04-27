package packageAddTask;

import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        DecimalFormat df = new DecimalFormat("#.##");
        System.out.println("Circle Area: " + MyArea.areaOfCircle(12.4));
        System.out.printf("Circle Area: %.2f \n",  MyArea.areaOfCircle(12.4));
        System.out.println("Circle Area: " + df.format(MyArea.areaOfCircle(12.4)) );
    }
}
