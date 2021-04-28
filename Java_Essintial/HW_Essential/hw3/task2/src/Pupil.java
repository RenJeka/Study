public class Pupil {

    void study() {
        System.out.println("study");
    }

    void read() {
        System.out.println("read");
    }

    void write() {
        System.out.println("write");
    }

    void relax() {
        System.out.println("relax");
    }
}

class BadPupil extends Pupil{
    @Override
    void study() {
        System.out.println("No study =(");
    }

    @Override
    void read() {
        System.out.println("Bad read");
    }

    @Override
    void write() {
        System.out.println("Bad write");
    }

    @Override
    void relax() {
        System.out.println("Almost all time relaxing");
    }
}

class GoodPupil extends Pupil{
    @Override
    void study() {
        System.out.println("Good study");
    }

    @Override
    void read() {
        System.out.println("Good read");
    }

    @Override
    void write() {
        System.out.println("Good write");
    }

    @Override
    void relax() {
        System.out.println("Have some little relax");
    }
}

class ExcelentPupil extends Pupil{
    @Override
    void study() {
        System.out.println("Excellent study");
    }

    @Override
    void read() {
        System.out.println("Excellent read");
    }

    @Override
    void write() {
        System.out.println("Excellent write");
    }

    @Override
    void relax() {
        System.out.println("No relax =(");
    }
}
