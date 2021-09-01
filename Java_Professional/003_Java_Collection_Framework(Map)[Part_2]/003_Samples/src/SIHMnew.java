import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.Map;
import java.util.Set;

public class SIHMnew {
    public static void main(String[] args) {
        IdentityHashMap<Integer, String> myIHM = new IdentityHashMap<>();
        myIHM.put(new Integer(1), "one");
        myIHM.put(new Integer(22), "twenty two");
        myIHM.put(new Integer(100), "hundred");
        myIHM.put(new Integer(1000), "thousand");
        myIHM.put(new Integer(1000000), "million");
        myIHM.put(new Integer(22), "twenty two");
        myIHM.put(new Integer(1), "one");

        Set tempSet = myIHM.entrySet();
        for (Object o : tempSet) {
            Map.Entry<Integer, String> map = (Map.Entry<Integer, String>) o;
            System.out.println(map.getKey() + " " + map.getValue());
        }

        System.out.println("--------------------------------------");
// =========================================================
        HashMap<Integer, String> myHM = new HashMap<>();
        myHM.put(new Integer(1), "one");
        myHM.put(new Integer(22), "twenty two");
        myHM.put(new Integer(100), "hundred");
        myHM.put(new Integer(1000), "thousand");
        myHM.put(new Integer(1000000), "million");
        myHM.put(new Integer(22), "twenty two");
        myHM.put(new Integer(1), "one");

        Set tempSetHM = myHM.entrySet();
        for (Object o : tempSetHM) {
            Map.Entry<Integer, String> map = (Map.Entry<Integer, String>) o;
            System.out.println(map.getKey() + " " + map.getValue());
        }
    }
}
