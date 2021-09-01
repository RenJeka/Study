import java.util.EnumMap;
import java.util.Map;
import java.util.Set;

public class SimpleEnumMapNew {

    public static void main(String[] args) {
        Map<Animal, String> myEnumMap = new EnumMap<Animal, String>(Animal.class);
        myEnumMap.put(Animal.CAT, null);
        myEnumMap.put(Animal.DOG, "D");
        myEnumMap.put(Animal.FROG, "F");
        myEnumMap.put(Animal.GIRAFFE, "G");

        Set set = myEnumMap.entrySet();

        for (Object o : set) {
            Map.Entry m = (Map.Entry) o;
            System.out.println(m.getKey() + " " + m.getValue());
        }

    }

    enum Animal {
        CAT, DOG, FROG, GIRAFFE
    }
}
