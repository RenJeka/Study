package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class ClassRoom {
    // Конструктор с параметром
    public ClassRoom(Pupil pupil) {
        pupil.read();
        pupil.relax();
        pupil.study();
        pupil.write();
    }
}
