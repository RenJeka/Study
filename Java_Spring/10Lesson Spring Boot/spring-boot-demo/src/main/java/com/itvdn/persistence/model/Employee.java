package com.itvdn.persistence.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String position;

    private String phone;

    @Override
    public String toString() {
        return String.join(", ", new String[] {
                "Employee # " + id,
                name, position, phone
        });
    }

    public Employee() {
    }

    public Employee(String name, String position, String phone) {
        this.name = name;
        this.position = position;
        this.phone = phone;
    }
}
