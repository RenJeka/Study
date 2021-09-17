package com.itvdn.javaProfessional.ex_005_map;

import java.util.HashMap;

public class HshMpExample {

    public static void main(String[] args) {

        HashMap cars = new HashMap<>();

        cars.put("mercedes", "ML 350");

        cars.put("volvo", "S 60");

        cars.put("range rover", "Land Rover");

        cars.put("mazda", "MX 5");

        cars.put("ford", "Fiesta");

        cars.put(null, "Evoque");

        cars.put("mercedes", "w223");

        System.out.println(cars);

    }

}
