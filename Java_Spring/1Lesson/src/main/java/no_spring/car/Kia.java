package no_spring.car;

import no_spring.audio.Kenwood;
import no_spring.navigation.Pioneer;

public class Kia {
    public Kenwood audioSystem = new Kenwood();
    public Pioneer navigationSystem = new Pioneer();

    public void move() {
        System.out.println("*****************************");
        System.out.println("KIA in action");
        System.out.println("*****************************");
    }

}
