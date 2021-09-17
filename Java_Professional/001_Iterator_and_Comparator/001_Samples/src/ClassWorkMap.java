import java.util.HashMap;
import java.util.Map;

public class ClassWorkMap {
    public static void main(String[] args) {
        Map<String, Integer> myMap1= new HashMap<>();
        myMap1.put(null, 50);
        myMap1.put(null, 70);
        myMap1.put("key1", 100);
        myMap1.put("key2", 200);
        myMap1.put("key3", 300);

        System.out.println(myMap1.size());
        for (Map.Entry<String, Integer> tmp: myMap1.entrySet()){
            System.out.println(tmp.getKey() + " " + tmp.getValue());
        }
    }
}
