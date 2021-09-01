package com.itvdn.javaProfessional.ex_005_map;

public class SimpleImmutableNew {
    private final int id;
    private final String firstName;

    public SimpleImmutableNew(int id, String firstName) {
        this.id = id;
        this.firstName = firstName;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }
}
