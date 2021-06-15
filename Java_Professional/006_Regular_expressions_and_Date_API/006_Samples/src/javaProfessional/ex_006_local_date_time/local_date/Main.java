package javaProfessional.ex_006_local_date_time.local_date;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.DayOfWeek;
import java.time.temporal.TemporalAdjusters;

public class Main {
    public static void main(String[] args) {
        LocalTime localTime = LocalTime.now();
        LocalDate localDate = LocalDate.now();
        LocalDateTime localDateTime = LocalDateTime.now();

        System.out.println(localTime);
        System.out.println(localDate);
        System.out.println(localDateTime);

        System.out.println("=============");

        // Слияние 2-х объектов
        LocalDateTime fromLocalTime = localTime.atDate(localDate);
        LocalDateTime fromDateTime = localDate.atTime(localTime);

        System.out.println(fromLocalTime);
        System.out.println(fromDateTime);

        System.out.println("=============");

        fromDateTime = localDate.atTime(12,00,57,01);
        System.out.println(fromDateTime);

        System.out.println("=============");
        localDate = localDate.with(TemporalAdjusters.next(DayOfWeek.SUNDAY));
        System.out.println(localDate);
    }
}
