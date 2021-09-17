package javaProfessional.ex_003_sorting.sorting_arrays;

import java.util.Arrays;

public class SortingStudents {
    public static void main(String[] args) {
        int[] marks = {7, 8, 9, 3, 0, 11};
        String[] students = {"Alex", "Andrew", "Yevhenii", "Karina"};

        Arrays.sort(marks);
        Arrays.sort(students);

        for (int tmp : marks) {
            System.out.print(tmp + " ");
        }
        System.out.println();

        for (String tmp : students) {
            System.out.print(tmp + " ");
        }
    }
}
