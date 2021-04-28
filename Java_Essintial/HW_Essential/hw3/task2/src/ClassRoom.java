public class ClassRoom {

    private Pupil pupil[];
    public ClassRoom(Pupil pupil[]) {
        this.pupil = pupil;
    }

    public ClassRoom(GoodPupil goodPupil[], BadPupil badPupil[]) {
        // TODO: Сделать из 2-х массивов — один, и записать их в массив pupil
    }

    public ClassRoom(ExcelentPupil excelentPupil[], GoodPupil goodPupil[], BadPupil badPupil[]) {
        // TODO: Сделать из 3-х массивов — один, и записать их в массив 
    }

    public void status() {
        for (int i = 0; i < pupil.length; i++) {
            System.out.println("Student " + (i+1) + ": ");
            pupil[i].study();
            pupil[i].read();
            pupil[i].write();
            pupil[i].relax();
            System.out.println("===================");

        }
    }

}
