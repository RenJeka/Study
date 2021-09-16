package javaProfessional;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SRENew {
    public static void main(String[] args) {
//        Pattern pattern = Pattern.compile("[a-zA-Z]+ \\s*[a-zA-Z]+");
//        Matcher m = pattern.matcher("Hello World");

//        Pattern pattern = Pattern.compile("[a-z && [^d]]+");
//        Matcher m = pattern.matcher("abc");

        Pattern pattern = Pattern.compile("[а-яієї']+", Pattern.CASE_INSENSITIVE );
        Matcher m = pattern.matcher("Мар'яна");

        boolean b = m.matches();

        System.out.println("matches: " + b);
    }
}
