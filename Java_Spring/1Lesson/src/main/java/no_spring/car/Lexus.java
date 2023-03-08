package no_spring.car;

import no_spring.audio.Alpine;
import no_spring.navigation.Navitel;


public class Lexus {
    public Alpine audioSystem = new Alpine();
    public Navitel navigationSystem = new Navitel();

    public void move() {
        System.out.println("*****************************");
        System.out.println("Lexus in action");
        System.out.println("*****************************");
    }



}
