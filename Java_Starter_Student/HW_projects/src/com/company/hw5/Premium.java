package com.company.hw5;

import java.util.Scanner;

public class Premium {
    public static void main(String[] args) {

        int workExperienceYears, premiumCoef = 0, salary, premium;
        Scanner sc = new Scanner(System.in);

        System.out.println("Программа для расчета выслуги лет сотрудникам");
        System.out.println("Введите кол-во лет работы сотрудника в компании: ");
        workExperienceYears = Integer.parseInt(sc.nextLine());
        System.out.println("Введите заработную плату сотрудника (у.е.): ");
        salary = Integer.parseInt(sc.nextLine());


        if (workExperienceYears < 5) {
            premiumCoef = 10;
        } else if (workExperienceYears >= 5 && workExperienceYears < 10) {
            premiumCoef = 15;
        } else if (workExperienceYears >= 10 && workExperienceYears < 15) {
            premiumCoef = 25;
        } else if (workExperienceYears >= 15 && workExperienceYears < 20) {
            premiumCoef = 35;
        } else if (workExperienceYears >=20 && workExperienceYears < 25) {
            premiumCoef = 45;
        } else if (workExperienceYears >=25) {
            premiumCoef = 50;
        }

        premium = salary * premiumCoef / 100;

        System.out.println("Премия сотруднику составляет " + premiumCoef +"%, " + "и составляет " + premium + " у.е.");
    }
}
