public class Distance {
    private static double distance;
    private static String dimension = "km";
    private static double coefficientByKm = 1;

    public static void print() {
        System.out.printf("distance : %.3f %s", distance, dimension);
        System.out.println();
    }

    public static void setDistance(double distance) {
        Distance.distance = distance;
    }

    static class Converter {

        private static void setDefaultToKilometers() {
            distance = distance / coefficientByKm;
            coefficientByKm = 1;
            dimension = "km";
        }

        static void convertToMiles() {
            setDefaultToKilometers();
            dimension = "miles";
            coefficientByKm = 1.609344;
            distance = distance * coefficientByKm;
        }

        static void convertToKilometers() {
            setDefaultToKilometers();
        }

        static void convertToMeters() {
            setDefaultToKilometers();
            coefficientByKm = 1000;
            dimension = "meters";
            distance = distance * coefficientByKm;
        }

        static void convertToFeet() {
            setDefaultToKilometers();
            coefficientByKm = 3280.84;
            dimension = "feet";
            distance = distance * coefficientByKm;
        }
    }

}
