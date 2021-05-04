public class Worker {
    String surnameAndInitials;
    String position;
    int yearOfJoining;

    public Worker(String surnameAndInitials, String position, int yearOfJoining) {
        this.surnameAndInitials = surnameAndInitials;
        this.position = position;
        this.yearOfJoining = yearOfJoining;
    }

    @Override
    public String toString() {
        return "Работник " + this.surnameAndInitials + "\n" +
                " Позиция: " + this.position + ", " +
                " Год послупления на работу: " + this.yearOfJoining;
    }
}
