public class Main {
    public static void main(String[] args) {
        Pupil excellentOne = new ExcelentPupil();
        Pupil goodOne = new GoodPupil();
        Pupil badOne = new BadPupil();
        Pupil goodSecond = new GoodPupil();

        Pupil[] students = {excellentOne, goodOne, badOne, goodSecond};

        ClassRoom classOfFour = new ClassRoom(students);

        classOfFour.status();
    }
}
