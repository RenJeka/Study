import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleHashMap {
    public static void main(String[] args) {
//        HashMap<String, Integer> hm = new HashMap<>();
//        hm.put(null, 25);
//        hm.put(null, 50);
//
//        System.out.println(hm.get(null));

        LinkedHashMap<String, String> lhm = new LinkedHashMap<>();
        lhm.put("арбуз", "a");
        lhm.put("дыня", "d");
        lhm.put("банан", "b");

        Set<Map.Entry<String, String>> set = lhm.entrySet();

        for (Map.Entry<String, String> stringStringEntry : set) {
            System.out.println(stringStringEntry.getKey() + " " + stringStringEntry.getValue());
        }
    }
}
