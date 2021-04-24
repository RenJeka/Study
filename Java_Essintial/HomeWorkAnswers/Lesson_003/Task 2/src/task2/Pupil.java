package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Pupil {
    void study() {
    }

    void read() {
    }

    void write() {
    }

    void relax() {
    }
}

class ExcelentPupil extends Pupil {
    @Override
    void read() {
        System.out.println("Excelent read");
    }

    @Override
    void study() {
        System.out.println("Excelent study");
    }

    @Override
    void write() {
        System.out.println("Excelent write");
    }

    @Override
    void relax() {
        System.out.println("Excelent relax");
    }
}

class GoodPupil extends Pupil {
    @Override
    void read() {
        System.out.println("Good read");
    }

    @Override
    void study() {
        System.out.println("Good study");
    }

    @Override
    void write() {
        System.out.println("Good write");
    }

    @Override
    void relax() {
        System.out.println("Good relax");
    }
}

class BadPupil extends Pupil {
    @Override
    void read() {
        System.out.println("Bad read");
    }

    @Override
    void study() {
        System.out.println("Bad study");
    }

    @Override
    void write() {
        System.out.println("Bad write");
    }

    @Override
    void relax() {
        System.out.println("Bad relax");
    }
}

