package javaProfessional.ex_004_date.date;

import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Date date = new Date();
        long millis = date.getTime();
        System.out.println(millis);
    }
}
