package javaProfessional;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SREPhoneNew {
    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("\\+[1-9]\\d{0,2}\\(\\d{2}\\)(\\d{2}-){2}\\d{3}");
        Matcher m = pattern.matcher("+380(67)22-33-444");
        boolean b = m.matches();
        System.out.println(b);

    }
}
