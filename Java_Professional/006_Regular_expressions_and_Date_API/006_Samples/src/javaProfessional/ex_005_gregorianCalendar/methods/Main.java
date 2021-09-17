package javaProfessional.ex_005_gregorianCalendar.methods;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class Main {
    public static void main(String[] args) {
        GregorianCalendar gc = new GregorianCalendar();
        System.out.println(gc.get(Calendar.DAY_OF_MONTH));
        // Месяц на 1 меньше
        System.out.println(gc.get(Calendar.MONTH));
        System.out.println(gc.get(Calendar.DAY_OF_YEAR));
        System.out.println(gc.get(Calendar.DAY_OF_WEEK));

        System.out.println((char) 27 + "[31m" + "===========================");
        gc.set(Calendar.MONTH, Calendar.JANUARY);
        // День на 1 больше( 7 = 1 )
        gc.set(Calendar.DAY_OF_MONTH, 12);
        System.out.println(gc.get(Calendar.DAY_OF_WEEK));

        System.out.println((char) 27 + "[32m" + "===========================");
        GregorianCalendar gc1 = new GregorianCalendar(2018, Calendar.JANUARY, 12);
        System.out.println(gc1.get(Calendar.DAY_OF_WEEK));

        System.out.println((char) 27 + "[33m" + "===========================");

        GregorianCalendar gc2 = new GregorianCalendar(2018, Calendar.DECEMBER, 28);
        gc2.add(Calendar.DAY_OF_MONTH, 5);
        System.out.println(gc2.get(Calendar.DAY_OF_MONTH));
        System.out.println(gc2.get(Calendar.MONTH));
        System.out.println(gc2.get(Calendar.YEAR));

        System.out.println((char) 27 + "[34m" + "===========================");
        // Преобразуем GregorianCalendar в Date
        Date d1 = gc2.getTime();
        System.out.println(d1);

        // Преобразуем Date в GregorianCalendar
        gc.setTime(d1);
        System.out.println(gc.get(Calendar.DAY_OF_MONTH));
        System.out.println(gc.get(Calendar.MONTH));
        System.out.println(gc.get(Calendar.YEAR));
    }
}
