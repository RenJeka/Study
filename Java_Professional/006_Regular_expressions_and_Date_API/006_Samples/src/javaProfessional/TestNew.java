package javaProfessional;

import org.w3c.dom.ls.LSOutput;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TestNew {
    public static void main(String[] args) throws ParseException {

// ------------- СОЗДАНИЕ ДАТЫ --------------------
        // Создание объекта даты
        Date date = new Date();
        System.out.println(date);

        // Создание экземпляра календаря
        Calendar myCalendar = Calendar.getInstance();
        myCalendar.setTime(date);

        // Вывод даты через календарь
        System.out.println(myCalendar);
        System.out.println(myCalendar.getTime());

    }
}
