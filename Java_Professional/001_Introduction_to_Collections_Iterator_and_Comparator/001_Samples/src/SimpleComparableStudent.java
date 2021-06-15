import java.util.Arrays;
import java.util.Comparator;

/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleComparableStudent implements Comparable {
    private String firstName;
    private int group;

    public SimpleComparableStudent(String firstName, int group) {
        this.firstName = firstName;
        this.group = group;
    }

    public String getFirstName() {
        return firstName;
    }

    @Override
    public String toString() {
        return firstName + " " + group;
    }

    @Override
    public int compareTo(Object o) {
        if (this.group > ((SimpleComparableStudent)o).group) {
            return 1;
        } else if (this.group < ((SimpleComparableStudent)o).group) {
            return -1;
        } else {
            return 0;
        }
    }
}

class SimpleComparatorStudent implements Comparator {
    @Override
    public int compare(Object o1, Object o2) {
        String firstName1 = ((SimpleComparableStudent)o1).getFirstName();
        String firstName2 = ((SimpleComparableStudent)o2).getFirstName();
        return firstName1.compareTo(firstName2);
    }
}

class Main {
    public static void main(String[] args) {
        SimpleComparableStudent[] myStudents = {
                new SimpleComparableStudent("Yevhenii", 333),
                new SimpleComparableStudent("Andrew", 222),
                new SimpleComparableStudent("Igor", 111),
                new SimpleComparableStudent("Peter", 300),
        };
        Arrays.sort(myStudents, new SimpleComparatorStudent());

        for (SimpleComparableStudent myStudent : myStudents) {
            System.out.println(myStudent);
        }
    }
}
