package javaProfessional.ex_003_groups_and_quantifers.quantifiers;

import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
//        В первом случае к первой группе относятся все возможные символы,
//        но при этом остается минимальное количество символов для второй группы.
        myMatches("([a-z]*)([a-z]+)", "abdcxyz");

//        Во втором случае для первой группы выбирается наименьшее количество
//        символов, т. к. используется слабое совпадение.
        myMatches("([a-z]?)([a-z]+)", "abdcxyz");

//        В третьем случае первой группе будет соответствовать вся строка, а для второй
//        не остается ни одного символа, так как вторая группа использует слабое совпадение.
        myMatches("([a-z]+)([a-z]*)", "abdcxyz");

//        В четвертом случае строка не соответствует регулярному выражению,
//        т. к. для двух групп выбирается наименьшее количество символов.
        myMatches("([a-z]?)([a-z]?)", "abdcxyz");
    }

    public static void myMatches(String regex, String input) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);
        if (matcher.matches()) {
            System.out.println("First group: " + matcher.group(1));
            System.out.println("Second group: " + matcher.group(2));
        } else {
            System.out.println("Nothing");
        }
        System.out.println();
    }
}

