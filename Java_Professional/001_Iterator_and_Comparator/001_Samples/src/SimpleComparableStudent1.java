import java.util.Arrays;
import java.util.Comparator;

class SimpleComparableStudent1  implements Comparable<SimpleComparableStudent1> {

    private String firstName;
    private int group;

    public String getFirstName() {
        return firstName;
    }

    public int getGroup() {
        return group;
    }

    public SimpleComparableStudent1(String firstName, int group) {
        this.firstName = firstName;
        this.group = group;
    }

    @Override
    public String toString() {
        return firstName + " " + group ;
    }

    @Override
    public int compareTo(SimpleComparableStudent1 o) {
        if (this.group > o.group) {
            return 1;
        } else if (this.group < o.group) {
            return -1;
        } else {
            return 0;
        }
    }
}

class CompareStudentByName implements Comparator <SimpleComparableStudent1> {
    @Override
    public int compare(SimpleComparableStudent1 o1, SimpleComparableStudent1 o2) {
        return o1.getFirstName().compareTo(o2.getFirstName());
    }
}

class Main1 {
    public static void main(String[] args) {
        SimpleComparableStudent1[] myStudents = {
                new SimpleComparableStudent1("Sasha", 366),
                new SimpleComparableStudent1("Valentina", 255),
                new SimpleComparableStudent1("Dima", 270),
                new SimpleComparableStudent1("Ben", 150),
        };
//        Arrays.sort(myStudents);
        Arrays.sort(myStudents, new CompareStudentByName());
        for ( SimpleComparableStudent1 student : myStudents) {
            System.out.println(student);
        }
    }
}




