package no_spring;


import no_spring.car.Audi;
import no_spring.car.Audi2;

public class Main {

    public static void main( String[] args )
    {
        Audi audi = new Audi();
        audi.move();

        audi.audioSystem.playRadio();

        Audi2 audi2 = new Audi2();

        audi2.move();
        audi2.audioSystem.playRadio();
    }
}
