package no_spring.car;

import no_spring.audio.Sony;
import no_spring.navigation.Garmin;

public class Audi {
    public Sony audioSystem = new Sony();
    public Garmin navigationSystem = new Garmin();

    public void move() {
        System.out.println("*****************************");
        System.out.println("Audi in action");
        System.out.println("*****************************");
    }

}

