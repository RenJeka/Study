package no_spring.car;


import no_spring.audio.Alpine;
import no_spring.audio.Sony;
import no_spring.navigation.Garmin;

public class Audi2 {
    public Alpine audioSystem = new Alpine();
    public Garmin navigationSystem = new Garmin();

    public void move() {
        System.out.println("*****************************");
        System.out.println("Audi in action");
        System.out.println("*****************************");
    }
}
