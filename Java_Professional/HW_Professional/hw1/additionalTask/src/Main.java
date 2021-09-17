import java.util.Arrays;

public class Main{
    public static void main(String[] args) {
        Car car1 = new Car(200, 50000, "Audi T8", "Black");
        Car car2 = new Car(200, 50000, "Audi T9", "Black");
        Car car3 = new Car(200, 50000, "Audi T10", "Yellow");
        Car car4 = new Car(200, 50000, "Audi T8", "Green");

        Car[] myGarage= {car1, car2, car3, car4};
        Arrays.sort(myGarage);

        for (Car car : myGarage) {
            System.out.println(car);
        }

        String[] myMazdas= {"Mazda", "Mazda3", "Mazda31", "Mazde", "Mazde1", "Mazda100", "Subar", "Audio300"};
        Arrays.sort(myMazdas);
        System.out.println(Arrays.toString(myMazdas));

        int[] myInts = {11, 100, 3, 505, 5000, 10, 104};
        Arrays.sort(myInts);
        System.out.println("Arrays.toString(myInts) : " + Arrays.toString(myInts));
    }

}
