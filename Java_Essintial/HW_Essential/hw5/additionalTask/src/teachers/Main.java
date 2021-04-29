package teachers;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> teachers = new ArrayList<>();
        int bestTeacherIndex;
        int soSoTeacherIndex;
        teachers.add("Виктор Петрович");
        teachers.add("Ксения Владимировна");
        teachers.add("Виталина Владимировна");
        teachers.add("Галина Олексеевна");
        teachers.add("Константин Борисович");
        teachers.add("Владислав Владиславович");

        bestTeacherIndex = teachers.indexOf("Константин Борисович");
        soSoTeacherIndex = teachers.indexOf("Виталина Владимировна");

        System.out.println("teachers : " + teachers);

    }
}
