package javaProfessional;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleGroupsRegExp {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("(.(.(.(.))))");
        Matcher m = p.matcher("Java");
        System.out.println(m.groupCount());
        System.out.println(m.find());
        for (int i = 0; i <= m.groupCount(); i++) {
            System.out.println(i + " = " + m.group(i));
        }
    }
}
