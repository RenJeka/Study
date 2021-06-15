package javaProfessional.ex_004_set.hashSet;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class Main {
    public static void main(String[] args){
        // Создаем коллекцию хэш-сет
        Set<String> set = new HashSet<>();
        set.add("арбуз");
        set.add("банан");
        set.add("дыня");
        set.add("земляника");
        set.add("ирис");
        set.add("картофель");
        for (String text : set) {
            System.out.println(text + " " + text.hashCode());
        }
    }
}
