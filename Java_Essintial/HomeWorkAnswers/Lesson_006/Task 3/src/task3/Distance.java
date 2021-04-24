package task3;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Distance {
    double distance;

    public void print() {
    }

    //Создаем статический клас Converter
    static class Converter {
        // метод для конвертация метров в киллометры
        public double fromMtoKm(double m) {
            return m / 100;
        }

        // метод для конвертация километров в мили
        // 1 миля = 8км
        public double fromKmtoMile(double km) {
            return km / 8;
        }
    }

    public static void main(String[] args) {
        Distance.Converter conv = new Converter();
        System.out.println(conv.fromMtoKm(10));
        System.out.println(conv.fromKmtoMile(10));
    }
}
